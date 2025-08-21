; AutoHotKey - ONE-SHOT to open and save Watabou Village URLs from an external text file
; burgMapLink should be a valid URL for this site: https://watabou.github.io/village-generator
; one URL per line
; by Ben Howard - ben@buttonpusher.tv

;===== START OF AUTO-EXECUTION SECTION =========================================================
#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
#Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.
; #Persistent ; Keeps script permanently running.
#SingleInstance force ; Ensures that there is only a single instance of this script running.
; SetTitleMatchMode, 2 ; sets title matching to search for "containing" instead of "exact"

;===== INITIALIZATION - VARIABLES ==============================================================
; Sleep shortcuts - use these to standardize sleep times

; OPTION TO CONFIGURE - these are the sleep times I use, but you can adjust them to suit your system and needs.
; I find that these work well for my system, but you may need to adjust them if you have a slower system or if the script is running too fast for the browser to keep up.
; These are in milliseconds.

sleepMicro := 5
sleepMini := 15
sleepShort := 333
sleepMedium := 666
sleepLong := 1500
sleepDeep := 5000

;===== END OF AUTO-EXECUTE =====================================================================
;===== MODIFIER MEMORY HELPER ==================================================================
; combine below with key and '::' to define hotkey 
; e.g.- ^f1::Msgbox You pressed Control and F1
; #=Win | !=Alt | ^=Ctrl | +=Shift | &=combine keys | *=ignore other mods
; <=use left mod key| >=use right mod key  | UP=fires on release

;===== COMMANDS TO EXECUTE HERE ============================================================

; NOTE - this is a one-shot script, meaning that it will be run more like a batch file than a traditional AutoHotKey script.
; There won't be a hotkey to press to invoke this script. It will, when run, process through the commands needed and then exit.
; You will need to run it again, if something goes wrong, or you need to fix an issue.

; Cities Map Exporter
        ; if you wish to save your map out in a different style than the default, you open the City Generator webpage by clicking
        ; the upper right button, choose your style settings, and then return to this dialog and click 'Process URLs'.
Gui, launchApp:Font, s12
Gui, launchApp:Add, Text, w400 x30, You can set up the City Generator's style settings before you process the URLs from your FMG map.`n`nTo do this, just open the City Generator webpage by clicking the upper right button, choose your style settings, and then return to this dialog and click 'Process URLs'.`n`nYou can also view the keyboard shortcuts for City Generator by clicking the button in the upper left below.`n`nYou will see a dialog message displayed after the first URL is processed, asking you if everything is working as expected.`n`nThe message will timeout after 8 seconds and process the next URL.`n`nYou will have options on that message to cancel or hide the message and continue processing the rest of the URLs.

Gui, launchApp:Add, Button, x80 y+20 w150 h40 gOpenKSURL, City Generator`nKeyboard Shortcuts
Gui, launchApp:Add, Button, x+20 w150 h40 gOpenURL, Open City Generator
Gui, launchApp:Add, Button, x80 y+10 w150 h40 gCancel, Cancel
Gui, launchApp:Add, Button, x+20 w150 h40 gOK, Process URLs

Gui, launchApp:Show, w460 h580, City Map Downloader

return

; OPTION TO CONFIGURE - If you do not want to use Google Chrome, you can change the Run command below to use your preferred browser.
; For example, if you want to use Firefox, you can change it to:
; Run, firefox.exe -P "Profile Name" -new-window https://watabou.github.io/city-generator
; or you can select a profile by using '-profile "profile_path"''
; If you do change the browser, you will also need to change the WindowTitle variable below to match the title of the browser window that opens.

OpenKSURL:
    Run, chrome.exe --profile-directory="Default" --new-window https://watabou.itch.io/medieval-fantasy-city-generator/devlog/494692/keyboard-shortcuts-and-mouse-actions
return

OpenURL:
    Run, chrome.exe --profile-directory="Default" --new-window https://watabou.github.io/city-generator
return

Cancel:
    ExitApp
return

OK:
    Gui, Destroy
            ; Turn BlockInput on to prevent user input while the script is running
            BlockInput, On
            ; OPTION TO CONFIGURE - if you are confident that the script will work as expected, you can set this to false to skip the message after the first URL is processed. You won't see any messages until the script completes.
            ShowContinueMsg := true ; Show the message to continue processing URLs
            ElapsedTime := 0 ; Initialize ElapsedTime
            PreviousElapsedTime := 0 ; Initialize PreviousElapsedTime
            PreviousElapsedTimeInSeconds := "1st URL" ; Initialize PreviousElapsedTimeInSeconds
            ; OPTION TO CONFIGURE - change the WindowTitle to match the title of the browser window that opens on your system when you open a new window. (I use a Chrome extension that serves as a homepage, so I set it to "New tab" - YMMV)
            Windowtitle := "New tab"
            FilePath := "city-urls.txt"
            LineCount := 0
                Loop, Read, %FilePath%
                {
                    LineCount++  ; Increment the line count for each line read
                }
            ; OPTION TO CONFIGURE - if you changed the browser above, you will need to change the Run command here as well.
            Run, chrome.exe --profile-directory="Default" --new-window ;Activate Chrome since you won't be in a Chrome window when you launch this script
            WinWaitActive, %WindowTitle%
            Sleep, sleepShort
            ; OPTION TO CONFIGURE - Browser WINDOW SIZE
            ; The values below are for my Ultra Wide monitor.
            ; Fullsceen on an Ultra Wide monitor is 3840x1600, so I set the width to 2307 and height to 1447. And position it to the left of the screen.
            ; If you have a different monitor size, you may want to adjust these values. I find that, as long as the is roughly 16x9 sized, it works well.
            ; Thoughyou may be tempted to set it to fullscreen, I find that the window is too large and map will be overly large for inclusion into your Obsidian vault. Images that wide don't display well in the Burg templates of the vault.
            WinMove, %WindowTitle%,,-7,0, 2307, 1447
            Sleep, sleepShort
            Loop, Read, %FilePath% ; process URLS from FilePath
                {
                    StartTime := A_TickCount ; Record the start time for this loop iteration
                    url := A_LoopReadLine ; each line is its own url
                    ToolTip, "Processing URL %A_Index% of %LineCount%`nPrevious file elapsed time: %PreviousElapsedTimeInSeconds% seconds.`nPlease wait...",
                    RemoveToolTip(10000) ; Remove tooltip after 10 seconds
                    WinActivate, %WindowTitle% ; Open the URL in Chrome
                    Sleep, sleepShort
                    Send, ^t
                    Sleep, sleepMedium
                    Send, %url%
                    Sleep, sleepShort
                    Send, {Enter}
                    ; Wait for Chrome to open and load the URL (adjust the delay if needed)
                    Sleep, sleepDeep
                    ElapsedTime := A_TickCount - StartTime ; Calculate the elapsed time for this pass
                    PreviousElapsedTime := ElapsedTime ; Store the elapsed time for use in the next loop pass
                    PreviousElapsedTimeInSeconds := Floor(PreviousElapsedTime / 1000.0) ; Convert PreviousElapsedTime to seconds
                    BlockInput, Off ; Allow user input again
                    if(showContinueMsg) and (A_Index != LineCount) ; Show the message only if it's not the last URL 
                    {
                        MsgBox, 262, Continue Processing City URLs?, Does everything appear to be working?`n`nIf so`, click 'Continue' to continue processing the rest of the URLs and hide this message until script completes.`n`nIf you want to process the next URL and display this message again`, press 'Try Again'.`n`nIf you need to make changes or something is wrong`, click 'Cancel' to stop this script and exit.`n`nWhile this message is visible the script is paused for 8 seconds., 8
                        IfMsgBox, Cancel
                            {
                            MsgBox, ,Something's up..., Exiting script - make changes and try again., 4
                            ExitApp ; Exit the script if the user chooses 'Cancel'
                            }
                        else IfMsgBox, TryAgain
                            showContinueMsg := true ; Show the message again for the next URL
                        else IfMsgBox, Continue
                            showContinueMsg := false ; Hide the message after the first pass
                    }
                    Send, ^w ; close Chrome window
                    BlockInput, On ; Block user input while processing the next URL
                }
            WinActivate, %WindowTitle%
            Send, ^w ; Close the tab in Chrome
            ;Turn BlockInput off to allow user input again
            BlockInput, Off
            MSGBOX,, Cities Script Finished, All the FMG Burgs-Cities URLs have been processed successfully.`n`nThe files have downloaded to your default download location.`n`nMove them to your campaign's asset folder in your Obsidian vault BEFORE you run the other AHK script.
return

GuiEscape:
GuiClose:
    ExitApp
;===== FUNCTIONS ===============================================================================

; use this function to Remove ToolTips - pretty self-explanatory - 'duration' should be given in milliseconds (4000 = 4 seconds)
RemoveToolTip(duration) {
    SetTimer, ToolTipOff, %duration%
    Return
  
  ToolTipOff:
      ToolTip
      return
  }
