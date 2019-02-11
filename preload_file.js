//########################################
//# This page contains score data, timing data and the media file path. Save it as a text file in
//# the same folder as abcweb.html. Abcweb preloads score and media when it is opened with the
//# file name as parameter in the url, for example: http://your.domain.org/abcweb.html?file_name
//# Also works locally with file:///path/to/abcweb.html?file_name
//# **** You have to correct the path to the media file below! (media_file="...";) ****
//########################################
//#
media_file = "J. S. Bach Cello Suite No. 1 BWV 1007 – IV. Sarabande.mp3";
offset_js = 0.00;
opt = {"jump":0,"no_menu":0,"repufld":0,"noplyr":0,"nocsr":0,"media_height":"","btns":1,"ipadr":"","mstr":0,"autscl":0,"ctrmed":0,"ctrnot":0,"lncsr":0,"opacity":0.2,"synbox":0,"speed":1,"top_margin":0,"yubvid":"","nomed":0,"delay":0,"repskip":0,"spdctl":0,"lopctl":false,"metro":0,"btime":-1,"etime":0};
lpRec = {"loopBtn":1,"loopStart":0,"loopEnd":48};
times_arr = [[0.00,3.30,6.40,9.30,12.40,15.11,17.81,20.62,24.12,27.63],
[27.63,30.73,33.83,36.94,40.04,42.95,46.05,49.15,52.26,55.36,58.47],
[58.47,61.57,64.68,67.78,70.88,73.99,77.09,80.20,83.30,86.41,89.51],
[89.51,92.61,95.72,99.22]];
abc_arr = ["X:1",
"T:4. Sarabande",
"T:Suite per violoncello n° 1 BWV 1007",
"T:Johann Sebastian BACH",
"Z:B.  2014",
"%%scale 0.72",
"%%score ( 1 2 )",
"L:1/8",
"M:3/4",
"I:linebreak $",
"K:G",
"V:1 bass nm=\"Violoncello\"",
"L:1/16",
"V:2 bass ",
"V:1",
" v[G,,D,B,]4 vC6 B,2 | F,(A,B,C) T[G,,D,B,]4 (A,2G,2) | D2=F,2 (TE,3(3D,/C,/B,,/ C,2)E,2 | %3",
" ^F,(CB,G,) T[D,,A,,F,]4 (E,2D,2) |$ A,(F,D,C,) B,,2>(G,,2 B,,D,G,A,) | %5",
" B,(G,E,D,) T^C,3(A,,/B,,/ C,D,E,F,) | G,(^CDC) (DA,)(G,F,) (E,G,)(F,D,) | A,,(D,E,^C,) D,4 D,,4 :: %8",
" [D,,A,,F,]2(E,D,) [D,,A,,F,C]6 (B,A,) |$ [G,,D,B,] (F,G,E,) T[A,,^D,]2>E,2 F,(G,A,B,) | %10",
" ^D,(A,B,C) TB,2(A,G,) (F,E,)(A,F,) | (G,E,)(F,^D,) E,4 E,,4 | %12",
" [B,,=D,]3(E,/=F,/) [C,,G,,E,]2>^F,2 G,(A,B,C) | ^G,,(DCB,) [A,,E,C]2>B,2 A,=G,F,E, |$ %14",
" D,4- [B,,D,](E,F,G,) (A,C)(B,G,) | D,(!4!G,!0!A,F,) G,4 G,,4 :| %16",
"V:2",
" x2 [G,,E,]2 z2 | x6 | x6 | x6 |$ x6 | x6 | x6 | x6 :: x6 |$ x6 | x6 | x6 | x6 | x6 |$ %14",
" z/ B,,/C,/A,,/ z4 | x6 :| %16",
""];
abc_enc = [];
