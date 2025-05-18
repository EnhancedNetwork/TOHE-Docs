@echo off
chcp 65001
echo Checking for curl...
echo 检查curl指令是否存在
echo.

where curl >nul 2>nul
IF %ERRORLEVEL% NEQ 0 (
    echo curl is not installed. This script failed to run. Please check the manual install tutorial on https://au.niko233.me
    echo curl在你的电脑上没有安装，本脚本无法执行。请参考 https://au.niko233.me 上的手动安装方式
    pause
    exit /b
)

echo Downloading custom regions info from au.niko233.me
echo 正在从 au.niko233.me 下载配置文件
echo.  

curl -L --output "%APPDATA%/../LocalLow/Innersloth/Among Us/regionInfo.json" --url "https://au.niko233.me/regionInfo.json"

IF %ERRORLEVEL% NEQ 0 (
    echo Download failed. Please check your internet connection and try again.
    echo Or you can try the following manual download method on https://au.niko233.me.
    echo 下载配置文件失败，请检查你的网络连接状况并重试。部分地区移动和有福地区存在屏蔽，只能手动下载。
    echo 你可以尝试手动安装，参考教程 https://au.niko233.me
    pause
    exit /b
)

echo.
echo Finished! Restart your Among Us to see the result!
echo 安装成功，重启你的Among Us查看结果！
echo https://au.niko233.me
pause
