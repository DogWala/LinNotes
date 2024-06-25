const path = require('path');
const rootPath = path.resolve(__dirname, '../..');

// 主窗口参数
const MAIN_WINDOW_WIDTH = 300
const MAIN_WINDOW_HEIGHT = 500
const MAIN_WINDOW_SHOW = false
const MAIN_WINDOW_DIR = rootPath
const MAIN_WINDOW_DEVTOOLS = true
// const MAIN_WINDOW_LOAD_FILE = rootPath + '/renderer/mainPage.html'
const MAIN_WINDOW_LOAD_FILE = 'http://localhost:4000/home/'
const MAIN_WINDOW_ICON = rootPath + '/assets/icon.png'

const MAIN_WINDOW_PARAM = {
    width: MAIN_WINDOW_WIDTH,
    height: MAIN_WINDOW_HEIGHT,
    show: MAIN_WINDOW_SHOW,
    preload_dir: MAIN_WINDOW_DIR,
    devTools: MAIN_WINDOW_DEVTOOLS,
    loadFile: MAIN_WINDOW_LOAD_FILE,
    ico: MAIN_WINDOW_ICON
}

//notes 窗口参数
const NOTES_PRELOAD_DIR = rootPath

module.exports = {
    MAIN_WINDOW_PARAM,
    NOTES_PRELOAD_DIR
}