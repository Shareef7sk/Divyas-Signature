@echo off
echo ========================================
echo Push to GitHub - Divya's Signature
echo ========================================
echo.
echo Repository: https://github.com/Shareef7sk/Divyas-Signature.git
echo.
echo ========================================
echo AUTHENTICATION REQUIRED
echo ========================================
echo.
echo You need a Personal Access Token to push.
echo.
echo If you don't have one:
echo 1. Go to: https://github.com/settings/tokens/new
echo 2. Name: Divyas-Signature-Deploy
echo 3. Check: repo (all permissions)
echo 4. Generate and COPY the token
echo.
echo ========================================
echo.
set /p token="Paste your GitHub Personal Access Token here: "
echo.
echo.
echo Pushing to GitHub...
echo.

git push https://%token%@github.com/Shareef7sk/Divyas-Signature.git main --force

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo SUCCESS! All files pushed to GitHub!
    echo ========================================
    echo.
    echo Your repository: https://github.com/Shareef7sk/Divyas-Signature
    echo.
    echo Next steps:
    echo 1. Go to https://app.netlify.com
    echo 2. Click "Add new site" - "Import from Git"
    echo 3. Select your repository
    echo 4. Publish directory: public
    echo 5. Deploy!
    echo.
) else (
    echo.
    echo ========================================
    echo ERROR: Failed to push
    echo ========================================
    echo.
    echo Please check:
    echo - Your token is correct
    echo - Token has 'repo' permissions
    echo - You're logged in as Shareef7sk
    echo.
    echo Or try GitHub Desktop:
    echo https://desktop.github.com/
    echo.
)

pause

