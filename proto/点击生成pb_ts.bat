@echo off
start /b pbjs -t static-module -w commonjs -o ./pb_ts/proto.js *.proto 
start /b pbts -o ./pb_ts/proto.ts ./pb_ts/proto.js 
pause