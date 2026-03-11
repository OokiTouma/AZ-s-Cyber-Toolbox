class AnimationLibrary {
    static fadeIn(element, duration = 300) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(10px)';
        element.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`;
        
        requestAnimationFrame(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        });
    }

    static fadeOut(element, duration = 300) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
        element.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`;
        
        requestAnimationFrame(() => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(-10px)';
        });
    }

    static slideIn(element, direction = 'right', duration = 300) {
        const startX = direction === 'right' ? '100%' : '-100%';
        element.style.transform = `translateX(${startX})`;
        element.style.transition = `transform ${duration}ms ease`;
        
        requestAnimationFrame(() => {
            element.style.transform = 'translateX(0)';
        });
    }

    static slideOut(element, direction = 'right', duration = 300) {
        const endX = direction === 'right' ? '100%' : '-100%';
        element.style.transform = `translateX(${endX})`;
        element.style.transition = `transform ${duration}ms ease`;
    }

    static shake(element, duration = 500) {
        element.style.animation = 'none';
        requestAnimationFrame(() => {
            element.style.animation = `shake ${duration}ms ease-in-out`;
        });
    }

    static pulse(element, duration = 2000) {
        element.style.animation = 'none';
        requestAnimationFrame(() => {
            element.style.animation = `pulse ${duration}ms ease-in-out infinite`;
        });
    }

    static bounce(element, duration = 500) {
        element.style.animation = 'none';
        requestAnimationFrame(() => {
            element.style.animation = `bounce ${duration}ms ease`;
        });
    }
}

class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.applyTheme(this.currentTheme);
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', this.currentTheme);
        this.applyTheme(this.currentTheme);
        return this.currentTheme;
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        
        const themeToggleButtons = document.querySelectorAll('.theme-toggle');
        themeToggleButtons.forEach(btn => {
            btn.textContent = theme === 'dark' ? '🌙' : '🌞';
        });
    }

    getCurrentTheme() {
        return this.currentTheme;
    }
}

class NotificationManager {
    constructor() {
        this.container = null;
        this.createContainer();
    }

    createContainer() {
        if (!this.container) {
            this.container = document.createElement('div');
            this.container.className = 'notification-container';
            document.body.appendChild(this.container);
        }
    }

    show(message, type = 'info', duration = 3000) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <span class="notification-icon">${this.getIcon(type)}</span>
            <span class="notification-message">${message}</span>
            <button class="notification-close" type="button">×</button>
        `;

        const closeButton = notification.querySelector('.notification-close');
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                this.removeNotification(notification);
            });
        }
        
        this.container.appendChild(notification);
        AnimationLibrary.fadeIn(notification);
        
        setTimeout(() => {
            this.removeNotification(notification);
        }, duration);
    }

    removeNotification(notification) {
        AnimationLibrary.fadeOut(notification);
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }

    getIcon(type) {
        const icons = {
            success: '✅',
            error: '❌',
            warning: '⚠️',
            info: 'ℹ️'
        };
        return icons[type] || 'ℹ️';
    }
}

class StorageManager {
    constructor() {
        this.version = '1.0.0';
        this.backupInterval = 5 * 60 * 1000; // 5分钟自动备份一次
        this.maxBackups = 10; // 最多保留10个备份
        this.init();
    }

    init() {
        // 检查数据版本
        this.checkVersion();
        // 启动自动备份
        this.startAutoBackup();
    }

    checkVersion() {
        const storedVersion = localStorage.getItem('storage_version');
        if (!storedVersion) {
            localStorage.setItem('storage_version', this.version);
        } else if (storedVersion !== this.version) {
            this.migrateData(storedVersion, this.version);
        }
    }

    migrateData(fromVersion, toVersion) {
        console.log(`Migrating data from version ${fromVersion} to ${toVersion}`);
        // 在这里添加数据迁移逻辑
        localStorage.setItem('storage_version', toVersion);
    }

    startAutoBackup() {
        setInterval(() => {
            this.createAutoBackup();
        }, this.backupInterval);
    }

    createAutoBackup() {
        const timestamp = new Date().toISOString();
        const backupKey = `auto_backup_${timestamp}`;
        
        const allData = this.backupAll();
        if (allData) {
            localStorage.setItem(backupKey, allData);
            
            // 清理旧备份
            this.cleanOldBackups();
        }
    }

    cleanOldBackups() {
        const backups = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith('auto_backup_')) {
                backups.push({
                    key,
                    timestamp: new Date(key.replace('auto_backup_', ''))
                });
            }
        }

        // 按时间排序，删除最旧的备份
        backups.sort((a, b) => b.timestamp - a.timestamp);
        while (backups.length > this.maxBackups) {
            const oldBackup = backups.pop();
            localStorage.removeItem(oldBackup.key);
        }
    }

    static save(key, data) {
        try {
            const serialized = JSON.stringify(data);
            const compressed = this.compress(serialized);
            localStorage.setItem(key, compressed);
            return true;
        } catch (error) {
            console.error('Storage save error:', error);
            // 尝试恢复
            this.handleStorageError(error, key, data);
            return false;
        }
    }

    static load(key) {
        try {
            const data = localStorage.getItem(key);
            if (!data) return null;
            
            const decompressed = this.decompress(data);
            return JSON.parse(decompressed);
        } catch (error) {
            console.error('Storage load error:', error);
            // 尝试从备份恢复
            return this.recoverFromBackup(key);
        }
    }

    static remove(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.error('Storage remove error:', error);
            return false;
        }
    }

    static compress(data) {
        // 简单的压缩实现（实际项目中可以使用LZ-string等库）
        try {
            return btoa(encodeURIComponent(data));
        } catch (error) {
            return data;
        }
    }

    static decompress(data) {
        try {
            return decodeURIComponent(atob(data));
        } catch (error) {
            return data;
        }
    }

    static handleStorageError(error, key, data) {
        if (error.name === 'QuotaExceededError') {
            // 存储空间不足，清理旧备份
            this.cleanOldBackups();
            // 尝试再次保存
            try {
                const serialized = JSON.stringify(data);
                localStorage.setItem(key, serialized);
            } catch (retryError) {
                console.error('Failed to save after cleanup:', retryError);
            }
        }
    }

    static recoverFromBackup(key) {
        // 查找最新的备份
        const backups = [];
        for (let i = 0; i < localStorage.length; i++) {
            const backupKey = localStorage.key(i);
            if (backupKey.startsWith('auto_backup_')) {
                backups.push(backupKey);
            }
        }

        backups.sort().reverse(); // 从最新到最旧

        for (const backupKey of backups) {
            try {
                const backupData = JSON.parse(localStorage.getItem(backupKey));
                if (backupData[key]) {
                    console.log(`Recovered ${key} from backup ${backupKey}`);
                    return backupData[key];
                }
            } catch (error) {
                continue;
            }
        }

        return null;
    }

    static exportData(keys) {
        const data = {};
        keys.forEach(key => {
            const value = this.load(key);
            if (value !== null) {
                data[key] = value;
            }
        });
        return JSON.stringify(data, null, 2);
    }

    static importData(jsonData) {
        try {
            const data = JSON.parse(jsonData);
            Object.keys(data).forEach(key => {
                this.save(key, data[key]);
            });
            return true;
        } catch (error) {
            console.error('Import error:', error);
            return false;
        }
    }

    static backupAll() {
        try {
            const allData = {
                version: this.version || '1.0.0',
                timestamp: new Date().toISOString(),
                data: {}
            };
            
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (!key.startsWith('auto_backup_')) {
                    allData.data[key] = this.load(key);
                }
            }
            
            return JSON.stringify(allData, null, 2);
        } catch (error) {
            console.error('Backup error:', error);
            return null;
        }
    }

    static restoreAll(jsonData) {
        try {
            const parsed = JSON.parse(jsonData);
            const data = parsed.data || parsed;
            
            localStorage.clear();
            
            Object.keys(data).forEach(key => {
                this.save(key, data[key]);
            });
            
            return true;
        } catch (error) {
            console.error('Restore error:', error);
            return false;
        }
    }

    static getStorageInfo() {
        let totalSize = 0;
        const items = [];
        
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            const size = (key.length + value.length) * 2; // UTF-16编码
            
            items.push({
                key,
                size,
                sizeFormatted: this.formatSize(size)
            });
            
            totalSize += size;
        }
        
        return {
            totalSize,
            totalSizeFormatted: this.formatSize(totalSize),
            itemCount: items.length,
            items
        };
    }

    static formatSize(bytes) {
        if (bytes < 1024) return bytes + ' B';
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
        return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
    }

    static clearOldData() {
        const oneMonthAgo = new Date();
        oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
        
        for (let i = localStorage.length - 1; i >= 0; i--) {
            const key = localStorage.key(i);
            if (key.startsWith('auto_backup_')) {
                const timestamp = new Date(key.replace('auto_backup_', ''));
                if (timestamp < oneMonthAgo) {
                    localStorage.removeItem(key);
                }
            }
        }
    }
}

class KeyboardManager {
    constructor() {
        this.shortcuts = new Map();
        this.init();
    }

    init() {
        document.addEventListener('keydown', (e) => {
            const key = e.key.toLowerCase();
            const action = this.shortcuts.get(key);
            
            if (action && !this.isInputFocused(e)) {
                e.preventDefault();
                action();
            }
        });
    }

    isInputFocused(event) {
        const target = event.target;
        return target.tagName === 'INPUT' || 
               target.tagName === 'TEXTAREA' || 
               target.isContentEditable;
    }

    register(key, action, description = '') {
        this.shortcuts.set(key.toLowerCase(), { action, description });
    }

    unregister(key) {
        this.shortcuts.delete(key.toLowerCase());
    }

    getShortcuts() {
        return Array.from(this.shortcuts.entries()).map(([key, value]) => ({
            key: key.toUpperCase(),
            action: value.description
        }));
    }
}

class TooltipManager {
    constructor() {
        this.container = null;
        this.createContainer();
    }

    createContainer() {
        if (!this.container) {
            this.container = document.createElement('div');
            this.container.className = 'tooltip-container';
            document.body.appendChild(this.container);
        }
    }

    show(element, text) {
        const rect = element.getBoundingClientRect();
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = text;
        tooltip.style.left = `${rect.left + rect.width / 2}px`;
        tooltip.style.top = `${rect.top - 10}px`;
        
        this.container.appendChild(tooltip);
        AnimationLibrary.fadeIn(tooltip);
    }

    hide() {
        const tooltips = this.container.querySelectorAll('.tooltip');
        tooltips.forEach(tooltip => {
            AnimationLibrary.fadeOut(tooltip);
            setTimeout(() => {
                if (tooltip.parentNode) {
                    tooltip.parentNode.removeChild(tooltip);
                }
            }, 300);
        });
    }
}
