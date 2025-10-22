@echo off
echo ========================================
echo Divya's Signature - Git Deployment
echo ========================================
echo.

REM Check if Git is installed
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Git is not installed!
    echo Please install Git from: https://git-scm.com/downloads
    pause
    exit /b 1
)

echo Git is installed. Proceeding...
echo.

REM Initialize Git if not already initialized
if not exist .git (
    echo Initializing Git repository...
    git init
    echo Git repository initialized!
    echo.
)

REM Add all files
echo Adding files to Git...
git add .
echo.

REM Commit changes
set /p commit_message="Enter commit message (or press Enter for default): "
if "%commit_message%"=="" set commit_message=Update: Divya's Signature Boutique

echo Committing changes...
git commit -m "%commit_message%"
echo.

REM Check if remote exists
git remote | findstr origin >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo ========================================
    echo No remote repository found!
    echo ========================================
    echo.
    echo Please follow these steps:
    echo 1. Go to https://github.com/new
    echo 2. Create a new repository named: divya-signature-boutique
    echo 3. Copy the repository URL
    echo.
    set /p repo_url="Paste your GitHub repository URL here: "
    
    echo Adding remote repository...
    git remote add origin %repo_url%
    echo.
)

REM Check current branch and create main if needed
git rev-parse --abbrev-ref HEAD >nul 2>&1
if %errorlevel% neq 0 (
    git branch -M main
)

REM Push to GitHub
echo Pushing to GitHub...
git push -u origin main
echo.

if %errorlevel% equ 0 (
    echo ========================================
    echo SUCCESS! Code pushed to GitHub!
    echo ========================================
    echo.
    echo Next steps:
    echo 1. Go to https://app.netlify.com
    echo 2. Click "Add new site" - "Import an existing project"
    echo 3. Connect your GitHub repository
    echo 4. Deploy settings:
    echo    - Build command: (leave empty^)
    echo    - Publish directory: .
    echo 5. Click "Deploy site"
    echo.
    echo Your site will be live in 1-2 minutes!
    echo.
) else (
    echo ========================================
    echo ERROR: Failed to push to GitHub
    echo ========================================
    echo.
    echo Possible issues:
    echo - Incorrect repository URL
    echo - Authentication required
    echo - Network connection
    echo.
    echo Try pushing manually:
    echo git push -u origin main
    echo.
)

pause

