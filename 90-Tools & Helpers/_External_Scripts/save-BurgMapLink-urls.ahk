; AutoHotKey - ONE-SHOT to open and save Watabou Village URLs from an external text file
; End URL should be a valid URL for this site: https://watabou.github.io/village-generator
; one URL per line
; by Ben Howard - ben@buttonpusher.tv

; You can customize this template by editing "C:\Windows\ShellNew\Template.ahk"
;===============================================================================================
; This Template.ahk file contains several of the most common items that I find myself often
; needing or adding to my scripts. It's not all essential. Here's a short list of what's here:
; - Function (CheckScriptUpdate) that will auto-reload the script when it detects a change
;	in the last modified timestamp on the script file itself
; - Sleep duration shortcuts - so that sleep times can be modified in one place to affect all
; - Modifier Memory Helper - just a comment section to remind you of what the codes are for things
;
; See comments througout the file to figure out what something is here for.

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
sleepMicro := 5
sleepMini := 15
sleepShort := 333
sleepMedium := 666
sleepLong := 1500
sleepDeep := 3500

;===== END OF AUTO-EXECUTE =====================================================================
;===== MODIFIER MEMORY HELPER ==================================================================
; combine below with key and '::' to define hotkey 
; e.g.- ^f1::Msgbox You pressed Control and F1
; #=Win | !=Alt | ^=Ctrl | +=Shift | &=combine keys | *=ignore other mods
; <=use left mod key| >=use right mod key  | UP=fires on release

;===== MAIN HOTKEY DEFINITIONS HERE ============================================================
; It's ok to remove the example below. It's just a quick way to test if new script is working.

MSGBOX, , DEBUG, save-village-urls Loaded,1

#IfWinActive, ahk_exe chrome.exe

F13:: ;<-- testing saving of a Village Generator export
    ; Make sure we are in a new Chrome window
    WinActivate, New tab
    Sleep, sleepShort
    ; re-position the window to a specifc size
    WinMove, New tab,,-7,0, 2307, 1447
    ; Read the CSV file line by line
    Loop, Read, village-urls.csv, CSV
        {
            ; each line is its own url
            url := A_LoopReadLine
            ; Open the URL in Chrome
            WinActivate, New tab
            Sleep, sleepShort
            Send, ^t
            Sleep, sleepMedium
            Send, %url%
            Sleep, sleepShort
            Send, {Enter}
            ; Wait for Chrome to open and load the URL (adjust the delay if needed)
            Sleep 3000
            ; We are going to save both the PNG and the SVG of each URL
            ;First the PNG
            ; postion cursor
            MouseMove, 250, 700
            ; send Right Click
            Click, right
            Sleep, 333
            ; move mouse down to "export as" in menu
            MouseMove, 300, 930, 50
            Sleep, 666
            ; move over to PNG option in sub-menu
            MouseMove, 430, 930, 30
            Sleep, 666
            ; send click to save
            Click
            ; wait for a bit
            Sleep, 3000
            ; And now the SVG
            ; postion cursor
            MouseMove, 250, 700
            ; send Right Click
            Click, right
            Sleep, 333
            ; move mouse down to "export as" in menu
            MouseMove, 300, 930, 50
            Sleep, 666
            ; move over to SVG option in sub-menu
            MouseMove, 430, 960, 30
            Sleep, 666
            ; send click to save
            Click
            ; wait for a bit
            Sleep, 3000
            ; close Chrome window
            Send, ^w
            ;MSGBOX, , DEBUG, A_LoopField1: %A_LoopField1%`nA_LoopField2: %A_LoopField2%locationName: %locationName%`n url: %url%
            
            ; Close the tab in Chrome
            ;Send, ^w
        }
        MSGBOX, Loop finished., 2
Return

F14:: ;<-- testing saving of a City Generator export
    ; Make sure we are in a new Chrome window
    WinActivate, New tab
    Sleep, sleepShort
    ; re-position the window to a specifc size
    WinMove, New tab,,-7,0, 2307, 1447
    ; Read the CSV file line by line
    Loop, Read, city-urls.csv, CSV
        {
            ; each line is its own url
            url := A_LoopReadLine
            ; Open the URL in Chrome
            WinActivate, New tab
            Sleep, sleepShort
            Send, ^t
            Sleep, sleepMedium
            Send, %url%
            Sleep, sleepShort
            Send, {Enter}
            ; Wait for Chrome to open and load the URL (adjust the delay if needed)
            Sleep 3000
            ; We are going to save both the PNG and the SVG of each URL
            ;First the PNG
            ; postion cursor
            MouseMove, 2272, 140
            ; send Right Click
            Click
            Sleep, 333
            ; move mouse down to "export as" in menu
            MouseMove, 2222, 300, 50
            ; move over to PNG option in sub-menu
            MouseMove, 2135, 300, 50
            Sleep, 666
            ; send click to save
            Click
            ; wait for a bit
            Sleep, 5000
            ; And now the SVG
            ; postion cursor
            MouseMove, 2272, 140
            ; send Right Click
            Click
            Sleep, 333
            ; move mouse down to "export as" in menu
            MouseMove, 2222, 300, 50
            Sleep, 666
            ; move over to PNG option in sub-menu
            MouseMove, 2135, 300, 30
            Sleep, 666
            ; move over to SVG option in sub-menu
            MouseMove, 2135, 330, 30
            Sleep, 666
            ; send click to save
            Click
            ; wait for a bit
            Sleep, 5000
            ; close Chrome window
            Send, ^w
        }
        MSGBOX, City URLs finished.,,2
Return

F15:: ;<-- testing saving of a Village Generator export
    ; Make sure we are in a new Chrome window
    WinActivate, New tab
    Sleep, sleepShort
    ; re-position the window to a specifc size
    WinMove, New tab,,-7,0, 2307, 1447
; We are going to save both the PNG and the SVG of each URL
            ;First the PNG
            ; postion cursor
            MouseMove, 250, 700
            ; send Right Click
            Click, right
            Sleep, 333
            ; move mouse down to "export as" in menu
            MouseMove, 300, 870, 50
            Sleep, 666
            ; move over to PNG option in sub-menu
            MouseMove, 415, 870, 50
            Sleep, 666
            ; send click to save
            Click
            ; wait for a bit
            Sleep, 5000
            ; And now the SVG
            ; postion cursor
            MouseMove, 250, 700
            ; send Right Click
            Click, right
            Sleep, 333
            ; move mouse down to "export as" in menu
            MouseMove, 300, 870, 50
            Sleep, 666
            ; move over to PNG option in sub-menu
            MouseMove, 415, 870, 30
            Sleep, 666
            ; move over to SVG option in sub-menu
            MouseMove, 415, 900, 30
            Sleep, 666
            ; send click to save
            Click
            ; wait for a bit
            Sleep, 5000
            ; close Chrome window
            ;Send, ^w
        MSGBOX, Loop finished., 2
Return

F16::
    ; Make sure we are in a new Chrome window
    WinActivate, New tab
    Sleep, sleepShort
    ; re-position the window to a specifc size
    WinMove, New tab,,-7,0, 2307, 1447
; We are going to save both the PNG and the SVG of each URL
            ;First the PNG
            ; postion cursor
            MouseMove, 2272, 140
            ; send Right Click
            Click
            Sleep, 333
            ; move mouse down to "export as" in menu
            MouseMove, 2222, 300, 50
            ; move over to PNG option in sub-menu
            MouseMove, 2135, 300, 50
            Sleep, 666
            ; send click to save
            Click
            ; wait for a bit
            Sleep, 5000
            ; And now the SVG
            ; postion cursor
            MouseMove, 2272, 140
            ; send Right Click
            Click
            Sleep, 333
            ; move mouse down to "export as" in menu
            MouseMove, 2222, 300, 50
            Sleep, 666
            ; move over to PNG option in sub-menu
            MouseMove, 2135, 300, 30
            Sleep, 666
            ; move over to SVG option in sub-menu
            MouseMove, 2135, 330, 30
            Sleep, 666
            ; send click to save
            Click
            ; wait for a bit
            Sleep, 5000
            ; close Chrome window
            Send, ^w
    return


!F24:: ; <-- Reload CHROME-HOTKEYS.ahk
    ;MSGBOX, , DEBUG,Reloading save-vilage-urls, 1
    Reload
    Return

;===============================================================================================

;===== FUNCTIONS ===============================================================================

; use this function to Remove ToolTips - pretty self-explanatory - 'duration' should be given in milliseconds (4000 = 4 seconds)
RemoveToolTip(duration) {
    SetTimer, ToolTipOff, %duration%
    Return
  
  ToolTipOff:
      ToolTip
      return
  }

  SavePage(locName) {
    ; activate Chrome
    WinActivate, Village Generator
    ; move window to upper left
    WinMove, Village Generator,,-7,0, 2307, 1447
    ; position mouse at Screen or Window 250,700
    MouseMove, 250, 700
    ; send Right Click
    Click, right
    Sleep, 333
    ; move mouse down to "export as" in menu
    MouseMove, 300, 930, 50
    Sleep, 666
    ; move over to PNG option in sub-menu
    MouseMove, 430, 930, 30
    Sleep, 666
    ; send click to save
    Click
    ; wait for a bit
    Sleep, 3000
    ; directly rename the png.png file to the location_name.png
    FileMove, C:\Users\butto\Downloads\png.png, C:\Users\butto\Downloads\%locName%.png
    Sleep, 666
    ; close Chrome window
    Send, ^w
    }