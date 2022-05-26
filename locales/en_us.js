/**
 * language: 简体中文
 */
const lang = {

  // app desc
  app: {
    desc: 'electerm 是多平台 terminal/ssh/sftp 客户端(linux, mac, win) based on electron/ssh2/node-pty/xterm/antd/subx and many other libs',
    isRunning: '运行中',
    press: '点击',
    toShow: 'to show'
  },

  // app menu
  menu: {
    // mac app
    hide: '隐藏',
    hideothers: '隐藏其他',
    unhide: '未隐藏',
    quit: '退出',

    // edit
    edit: '编辑',
    undo: '撤销',
    redo: '重做',
    cut: '剪切',
    copy: '复制',
    paste: '粘贴',
    pasteandmatchstyle: 'paste and match style',
    del: '删除',
    selectall: '全选',
    startspeaking: 'start speaking',
    stopspeaking: 'stop speaking',

    // view
    view: '预览',
    reload: '上传',
    forcereload: '强制上传',
    toggledevtools: 'toggle dev tools',
    toggleControl: 'toggle control buttons',
    resetzoom: 'reset zoom',
    zoomin: '放大',
    zoomout: '缩小',
    togglefullscreen: 'toggle fullscreen',

    // window
    window: 'window',
    minimize: '最小化',
    maximize: '最大化',
    unmaximize: 'unmaximize',
    close: '关闭',
    restart: '重启',
    front: '前',

    // help
    help: '帮助',
    about: '关于',
    checkUpdate: '检查更新',
    reportIssue: '反馈',
    homepage: '首页',
    sencondInstanceTip: 'can only do this in main window'
  },

  // common
  common: {
    history: '历史记录',
    bookmarks: '书签',
    bookmarkCategory: '类别',
    setting: '设置',
    about: '关于',
    ok: '好',
    cancel: '取消',
    expandAll: '全部展开',
    collapseAll: '全部折叠',
    restoreSessions: '恢复会话',
    ignore: '忽略',
    pin: '面板开启中'
  },

  // control buttons
  control: {
    author: '验证',
    download: '下载',
    bugReport: 'bug报告',
    checkForUpdate: '新版检查',
    homepage: '首页',
    notFoundContent: '无项目',
    newSsh: '新 ssh',
    newTerminal: '新终端',
    dependencies: '依赖',
    env: 'env',
    os: 'os',
    userTips: '用户提示',
    commandLineUsage: '命令行用法',
    newBookmark: '新书签',
    newWindow: '新窗口'
  },

  // transferHistory
  transferHistory: {
    transferHistory: '连接历史',
    localPath: '本地路径',
    remotePath: '远程路径',
    type: '类型',
    startTime: '开始时间',
    finishTime: '结束时间',
    speed: '速度',
    clear: '清除',
    fromPath: '源路径',
    toPath: '目标路径'
  },

  // ssh tabs
  tabs: {
    titleEmptyWarn: '标题不能为空',
    close: '关闭',
    closeOtherTabs: '关闭其他标签页',
    closeTabRight: '关闭右边标签页',
    newTab: '新标签',
    duplicate: '重复',
    rename: '重命名',
    openNewTerm: '打开新终端',
    sessions: '会话'
  },

  // main warpper
  main: {
    error: '出错'
  },

  // updater check
  updater: {
    noNeed: '无需升级',
    noNeedDesc: '您使用的是最新版本',
    fail: '检查更新失败',
    goGetIt: 'go get it!',
    newVersion: '发现新版本',
    upgrade: '升级',
    upgrading: '升级中',
    skipThisVersion: '跳过此版本'
  },

  // setting
  setting: {
    new: '新的',
    settings: '设置',
    common: '常见',
    hotkeyNotOk: '热键冲突，请使用其他热键',
    saved: '已保存',
    saveLang: '保存并重启',
    restartNow: '立刻重启',
    hotkeyDesc: '系统热键（将窗口带回前方）',
    timeoutDesc: 'ssh/sftp 超时(ms)',
    scrollBackDesc: '回滚行',
    language: '语言',
    copyWhenSelect: '选中并复制',
    rightClickSelectsWord: '右键自动选择文本',
    pasteWhenContextMenu: '右键粘贴',
    fontSize: '字体大小',
    fontFamily: '字体系列',
    opacity: '不透明度',
    global: '全局',
    disableSshHistory: '关闭 ssh 历史记录',
    disableTransferHistory: '关闭 sftp 连接记录',
    resetAllToDefault: '恢复默认',
    terminalBackgroundImage: '终端背景图',
    chooseFile: '选择文件',
    rendererType: '渲染器类型',
    defaultTerminalType: '默认终端类型',
    ctrlOrMetaOpenTerminalLink: '按住ctrl键或者meta键 (mac) 打开终端连接',
    noTerminalBg: '无背景图',
    saveTerminalLogToFile: '保存终端日志',
    checkUpdateOnStart: '应用启动时检查更新',
    encrypt: '加密',
    cursorBlink: '光标闪烁',
    openAll: '打开此类别中的所有书签',
    useSystemTitleBar: '使用系统标题栏',
    useSystemTitleBarTip: '使用系统标题栏时，透明不工作，需要重启应用',
    onStartBookmarks: '启动时打开书签',
    pleaseSelect: '请选择',
    keepaliveIntervalDesc: '保持活动间隔',
    editorTip: '编辑\命令\路径',
    cursorStyle: '光标样式',
    confirmBeforeExit: '退出前确认'
  },

  // sftp
  sftp: {
    cancel: '取消',
    skip: '跳过',
    merge: '合并',
    overwrite: '改写',
    rename: '重命名',
    renameAll: '全部重命名',
    mergeDesc: '合并文件',
    overwriteDesc: '覆盖文件',
    mergeAll: '全部合并',
    overwriteAll: '全部覆盖',
    renameDesc: '重命名文件/文件夹',
    folder: '文件夹',
    file: '文件',
    fileConflict: '文件冲突',
    submit: '提交',
    edit: '编辑',
    open: '打开',
    permission: '许可',
    name: '名称',
    mode: '模式',
    path: '路径',
    fullPath: '完整路径',
    size: '尺寸',
    accessTime: '访问时间',
    modifyTime: '修改时间',
    attributes: '属性',
    enter: '进入',
    deleteAll: '全部删除',
    selected: '选中',
    newFile: '新建文件',
    newFolder: '新建文件夹',
    selectAll: '全选择',
    refresh: '刷新',
    editPermission: '编辑权限',
    info: '信息',
    filesAndFolders: '文件/文件夹',
    files: '文件',
    delTip: '确定删除',
    delTip1: '所有文件/目录',
    goParent: '转到父文件夹',
    hide: '隐藏',
    show: '显示',
    hfd: '隐藏文件和目录',
    remote: '远程',
    local: '本地',
    fileTransfers: '文件传输',
    cancelAll: '全部取消',
    upload: '上传',
    download: '下载',
    resume: '恢复',
    pause: '粘贴',
    reset: '重启',
    showInDefaultFileMananger: '在文件管理器中显示',
    compressAndDownload: '压缩和下载',
    compressAndUpload: '压缩和上传',
    editWith: '编辑器...'
  },

  permission: {
    read: '读取',
    write: '写入',
    exec: '执行',
    owner: '所有者',
    group: '群组',
    other: '其他'
  },

  // ssh form
  form: {
    password: '密码',
    privateKey: '私钥',
    privateKeyDesc: '私钥字符串',
    importFromFile: '从文件导入',
    passphrase: '密码短语',
    passphraseDesc: '私钥的密码',
    host: 'host',
    username: '用户名',
    port: '宽口',
    title: '标题',
    saveAndConnect: '保存并连接',
    saveAndCreateNew: '保存并新建',
    save: '保存',
    loginScript: '运行 script',
    loginScriptDelay: '运行脚本延迟',
    loginScriptTip: '登录后运行脚本',
    connect: '连接',
    testConnection: '测试连接',
    required: '必填',
    proxyIp: '代理 ip',
    proxyPort: '代理端口',
    proxyType: '代理类型',
    proxyIpPlaceholder: '代理ip地址',
    selectProxy: '选择代理',
    auth: '认证',
    proxy: '代理',
    use: '使用',
    encode: '编码',
    terminalType: '终端类型',
    startDirectory: '启动目录',
    ignoreKeyboardInteractive: '忽略键盘交互',
    description: '描述'
  },

  // ssh terminal
  ssh: {
    clear: '清除',
    selectAll: '全选',
    savePassword: '保存密码',
    search: '搜索',
    terminal: '终端',
    nextMatch: 'next match',
    prevMatch: 'prev match',
    split: '分割',
    fileManager: '文件管理',
    changeDirection: '变更路径',
    batchInput: '批量输入',
    runInAllTerminals: '在所有终端中运行',
    matchCase: '区分大小写',
    matchWholeWord: '匹配所有文本',
    useRegExp: '使用正则表达式'
  },

  // terminal themes
  terminalThemes: {
    terminalThemes: '终端主题',
    export: '导出',
    themeName: '主题名称',
    saveAndApply: '保存并使用',
    apply: '使用',
    default: '默认',
    newTheme: '新主题',
    themeConfig: '主题配置',
    updated: '更新',
    uiThemes: '界面主题'
  },

  // quick commands
  quickCommands: {
    quickCommand: '快捷命令',
    quickCommands: '快捷多命令',
    quickCommandName: '快速命令名称',
    addQuickCommands: '添加快捷命令',
    newQuickCommand: '新建快捷命令',
    inputOnly: '输入',
    labels: '标签'
  },

  // setting sync
  settingSync: {
    settingSync: '同步设置',
    sync: '同步',
    syncing: '同步中',
    syncSettings: '同步设置',
    uploadSettings: '上传设置',
    downloadSettings: '下载设置',
    synced: '已同步',
    syncDesc: '书签/历史/设置同步到github',
    autoSync: '自动同步',
    lastSyncTime: '最近同步时间',
    useExistingGistId: '现有使用'
  }
}

module.exports = {
  lang,
  name: '简体中文',
  match: /chn/,
  flag: 'cn'
}
