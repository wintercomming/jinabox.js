console.log('loading widget')
let _url;
let _results;

_icons = {
	color: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDEwcHgiIGhlaWdodD0iNDEwcHgiIHZpZXdCb3g9IjAgMCA0MTAgNDEwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA2NCAoOTM1MzcpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPHRpdGxlPlByb2R1Y3QgbG9nb19Db3JlX0NvbG9yZnVsPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9Iumhtemdoi0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iUHJvZHVjdC1sb2dvX0NvcmVfQ29sb3JmdWwiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNDcuODE2MjczLDE1My4yMTczNjggTDI0OS43MzA4MzIsMTUzLjI0MDUzMSBDMjg4LjIwODk3NCwxNTQuNjgzMDI3IDMwOS44NjQ2OSwxNzAuMzE1MTY2IDMyNy4xMDg5ODUsMTkzLjE1Nzg2MyBDMzE5LjIxNDY0MywyNzIuMzU1NTEyIDI1MC4wNjA3MTEsMzMwLjIwNTg3NSAxNzEuNTI0MjQzLDMyNi45OTY0NTIgQzEzMS41NjU5NzcsMzI0LjU5NjA3NCA5Ni42NjE3MDc5LDMwNi42MjYyNDMgNzEuNzI4NjYwMywyNzkuNTI0OTA0IEMxMTQuMzYxOTczLDIyMC43NDU5NzUgMTgzLjM2OTk5NCwxNTQuNDg2NTY3IDI0NS45MTAyLDE1My4yMzUyOTcgTDI0Ny44MTYyNzMsMTUzLjIxNzM2OCBaIiBpZD0i6Lev5b6EIiBmaWxsPSIjRkZDQzY2Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zOC42MTYzNTQ5LDIyMi4wNjY3MTkgTDM4LjY0NTc3OTQsMjIyLjAyNTkxMSBDNTMuNTM5MzMwNiwyMDAuMDk3NjYyIDc3LjM5NzEwMiwxNzguMzEwNzk4IDEwOS4zNTcxNzUsMTg3LjA3OTMzOSBDMTcwLjEzNDY3OCwyMDQuOTc0MzIxIDIyNy4xODU1MTcsMjQxLjYzMjY1IDI2MS45Njk5NDQsMjQwLjU5NzMzNyBDMjk1LjA3NDUxOSwyMzkuNjEyMDI0IDMwOC40NDI4MzEsMjI5Ljc2ODUyNCAzMjIuOTQ3NzU1LDIxNi4yNjU1MTkgQzMwNS4yNzE4OTgsMjgzLjMyODM3MiAyNDIuMTk2OTA1LDMyOS44ODQ1MTggMTcxLjUyNDI0MywzMjYuOTk2NDUyIEMxMDcuNTE0ODg4LDMyMy4xNTEyNzQgNTYuNDc0NTk3NCwyNzkuMzUzMzE3IDM4LjYxNjM1NDksMjIyLjA2NjcxOSBaIiBpZD0i6Lev5b6EIiBmaWxsPSIjRkY3NjczIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNDQuMTIxOTYsMjAwLjcwMDUzMyBMMTQ1LjM5NDI1OCwxOTkuNjI5NTA3IEwxNDguMDE3NTk3LDIwMC42Mjk1MzIgQzE5MC42ODcwNTMsMjE2Ljk5MTg4OSAyMjQuNjI0ODg1LDIzNC42NTgzNDggMjUxLjM5MjkzNywyMzkuMjE4NTM1IEMyODQuODcxNTU1LDI0NC45MjE5MyAzMDYuOTExMzA5LDIyOS4wODI2NDkgMzIzLjA5MDg3NiwyMTUuNzI3ODAyIEMzMDUuNjEwNzkxLDI4My4wNzc4MzUgMjQyLjM4Njc5MywzMjkuODkyMjc4IDE3MS41MjQyNDMsMzI2Ljk5NjQ1MiBDMTMyLjI5MjA2LDMyNC42Mzk2OTEgOTcuOTMxODcwNiwzMDcuMjc0MTYzIDczLjA5NzY4NjMsMjgwLjk5MzE5OCBDOTEuODQzMzY1MSwyNTIuODc3MjA0IDExNi43MjExNDQsMjIzLjkyMTM2OSAxNDQuMTIxOTYsMjAwLjcwMDUzMyBaIiBpZD0i6Lev5b6EIiBmaWxsPSIjRkY5RjczIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zMzkuODExMzg4LDMwMy41MjA0NjEgTDM5OS42MTMyOTksMzU3LjI2ODUzOCBDNDEyLjAwNDI4NSwzNjguNDA1MjQgNDEzLjAwNzA4OCwzODcuNDM2NCA0MDEuODU0NjU4LDM5OS44MDQ5NjcgQzM5MC44NDA4MDUsNDEyLjAxOTg0NiAzNzIuMDUzODAyLDQxMy4xMzY5MzcgMzU5LjY2NTE1Miw0MDIuNDAxMzA2IEwzNTkuMjQ5MTk3LDQwMi4wMzQyMTcgTDI5Ni4wOTAyNzQsMzQ1LjI2ODM1NSBDMzEyLjY3NTc1MSwzMzMuNjA4MDA1IDMyNy40MjI1NzcsMzE5LjUxOTIxOCAzMzkuODExMzg4LDMwMy41MjA0NjEgWiBNMC41NTAwMzIxOTIsMTY4LjQ4MjU2OCBDNS45MTU2MzY4OCw3MC4wNjA2NjE5IDkxLjc2NTMxMTksLTUuMDk3ODg0NzQgMTkwLjEzNDczMSwwLjI3MDU4Mjg4MSBDMjg4LjUwNDE1LDcuNDI4NTM5ODQgMzY1LjQxMTE1MSw5MS41MzQ1MzI4IDM1OC4yNTcwMTEsMTg5Ljk1NjQzOSBDMzUxLjEwMjg3MiwyODguMzc4MzQ1IDI2Ny4wNDE3MzIsMzYzLjUzNjg5MSAxNjguNjcyMzEzLDM1OC4xNjg0MjQgQzcwLjMwMjg5MzEsMzUyLjc5OTk1NiAtNC44MTU1NzI1LDI2Ni45MDQ0NzUgMC41NTAwMzIxOTIsMTY4LjQ4MjU2OCBaIE0xODcuOTUyMTI3LDMwLjkzOTA5ODEgQzEwNy40NTU0OTcsMjcuNjQ5NTcxNyAzNS4xNzI4MDk1LDkwLjE1MDU2ODUgMzEuODg3MjMyNSwxNzAuNzQzOTU5IEMyOC42MDE2NTU1LDI1MS4zMzczNSA4OS4zODQ4MjUxLDMyMi4wNjIxNjMgMTcxLjUyNDI0MywzMjYuOTk2NDUyIEMyNTIuMDIwODczLDMzMC4yODU5NzggMzIyLjY2MDc3MywyNjkuNDI5NzQ0IDMyNy41ODkxMzgsMTg3LjE5MTU5IEMzMzAuODQxODU5LDEwNy40MDQxMzQgMjcxLjMwMDgwMSwzNy4yODg4NzA1IDE5MC40MDk4NiwzMS4xMDY4MDggTDE4Ny45NTIxMjcsMzAuOTM5MDk4MSBaIiBpZD0i5b2i54q2IiBmaWxsPSIjMDA5OTk5Ij48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=',
	mono: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODJweCIgaGVpZ2h0PSI4MnB4IiB2aWV3Qm94PSIwIDAgODIgODIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDY0ICg5MzUzNykgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+UHJvZHVjdCBsb2dvL0NvcmUvbGlnaHQvUHJvZHVjdCBsb2dvX0NvcmVfbGlnaHQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0i6aG16Z2iLTIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJQcm9kdWN0LWxvZ28vQ29yZS9saWdodC9Qcm9kdWN0LWxvZ29fQ29yZV9saWdodCIgZmlsbD0iIzAwOTk5OSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPHBhdGggZD0iTTQ5LjcwMjM4OTQsMzAuNTM0Mzc1NyBDMzYuOTc5Mjk1OCwzMC4yNDIwMTQ0IDIyLjc2MjgzNzUsNDMuODQ0MDgyNSAxNC4wODgwMDA5LDU1LjgzMDg5NDIgQzE5LjAwMzc0MTYsNjAuODAxMDM1NiAyNy4yNjU4Mjk3LDY1LjE5OTI3NTEgMzQuNzg0MDIxNCw2NS40OTE2MzY0IEM1MC4zOTg3MjcyLDY2LjM2ODcyMDIgNjMuODcxMjg5MSw1NC4yMTU2Mzc5IDY1LjMxNzA5NTIsMzguNzIwNDkxIEM2MS44NDcxNjA2LDM0LjA0MjcxMDggNTcuNTA5NzQyMywzMC44MjY3MzcgNDkuNzAyMzg5NCwzMC41MzQzNzU3IFoiIGlkPSLot6/lvoQiIGZpbGwtb3BhY2l0eT0iMC43OTU3ODIzNDMiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTY0LjgwOTUyNDgsNDIuNzU3MTY3MiBDNjEuNzMzNjIwMSw0NS42NjYxMDA5IDU5LjE0MTM0MTUsNDcuODI2MjM1MiA1Mi4yMDIxMDQ5LDQ4LjAzMzAxNzUgQzQ1LjI2Mjg2ODIsNDguMjM5Nzk5OSAzMy44ODE2NDY2LDQwLjkxODA1MzEgMjEuNzU2OTgyOSwzNy4zNDM4OTg5IEMxNS4yNTEwNjU4LDM1LjU1NjgyMTggMTAuNDI4MTQ0Niw0MC4xMjQxOTQxIDcuNDcwOTA5NTgsNDQuNTkxODg2OSBDMTEuMDE5NTkxNiw1Ni4yMDc4ODgxIDIxLjM2OTkxNDMsNjQuODQ1NDI3NSAzNC4wODYwMjUsNjUuNDQxMTE5OSBDNDguNTc2NDc2Nyw2Ni42MzI1MDQ3IDYxLjg1MjI4OTcsNTYuNzU1OTM4IDY0LjgwOTUyNDgsNDIuNzU3MTY3MiBaIiBpZD0i6Lev5b6EIiBmaWxsLW9wYWNpdHk9IjAuNzk1NzgyMzQzIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik02Ny43MzQ3ODc3LDYwLjMwNjg1NTUgTDc5LjY1NDg3MDMsNzAuOTk3MDA0NiBDODIuMTI0NjcyOCw3My4yMTIwODA5IDgyLjMyNDU1NDEsNzYuOTk3MzU1IDgwLjEwMTYyMzcsNzkuNDU3NDQ3NiBDNzcuOTA2MzE0Nyw4MS44ODY5NzE4IDc0LjE2MTY0MTksODIuMTA5MTU5OSA3MS42OTIzMDQ4LDc5Ljk3Mzg1NjEgTDcxLjYwOTM5NTYsNzkuOTAwODQyNiBMNTkuMDIwODA0LDY4LjYwOTg5OTUgQzYyLjMyNjQwMjcsNjYuMjkwNzkyOCA2NS4yNjU1NjM2LDYzLjQ4ODc0NDUgNjcuNzM0Nzg3Nyw2MC4zMDY4NTU1IFoiIGlkPSLlvaLnirbnu5PlkIgiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTM3LjQzOTk4NzQsNi4xNzc5NzkxNCBDNTMuODI2NTAyNCw3LjE2MjM1MTg5IDY1Ljk1MjUyMzUsMjEuMjcxNjk0NiA2NS4yOTcwNjMsMzcuMzQ5NzgyNyBDNjQuMzEzODcyMSw1My43NTU5OTUxIDUwLjIyMTQ2OTEsNjUuODk2NTkyMyAzNC4xNjI2ODQ0LDY1LjI0MDM0MzkgQzE3Ljc3NjE2OTQsNjQuMjU1OTcxMSA1LjY1MDE0ODI5LDUwLjE0NjYyODQgNi4zMDU2MDg5NCwzNC4wNjg1NDAyIEM2Ljk2MTA2OTU5LDE3Ljk5MDQ1MiAyMS4zODEyMDI4LDUuNTIxNzMwNiAzNy40Mzk5ODc0LDYuMTc3OTc5MTQgTTM3Ljg3NTQwOTEsMC4wNTk3MjE5NTc1IEMxOC4yNTEwNjc5LC0xLjAxMTI2NzggMS4xMjQzNzAxMiwxMy45ODI1ODg3IDAuMDUzOTUxNTEzMSwzMy42MTc0MDA5IEMtMS4wMTY0NjcxLDUzLjI1MjIxMzEgMTMuOTY5MzkzNCw3MC4zODgwNDkgMzMuNTkzNzM0Niw3MS40NTkwMzg4IEM1My4yMTgwNzU4LDcyLjUzMDAyODUgNjkuOTg3OTY3Myw1Ny41MzYxNzIgNzEuNDE1MTkyMSwzNy45MDEzNTk5IEM3Mi44NDI0MTY5LDE4LjI2NjU0NzggNTcuNDk5NzUwMiwxLjQ4NzcwODMyIDM3Ljg3NTQwOTEsMC4wNTk3MjE5NTc1IFoiIGlkPSLlvaLnirYiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==',
	inverse: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDIwcHgiIGhlaWdodD0iNDIwcHgiIHZpZXdCb3g9IjAgMCA0MjAgNDIwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA2NCAoOTM1MzcpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPHRpdGxlPlByb2R1Y3QgbG9nb19Db3JlX0Rhcms8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0i6aG16Z2iLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJQcm9kdWN0LWxvZ29fQ29yZV9EYXJrIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8cGF0aCBkPSJNMjUzLjg2MDU3MywxNTYuOTU0Mzc3IEwyNTUuODIxODI4LDE1Ni45NzgxMDUgQzI5NS4yMzg0NjEsMTU4LjQ1NTc4MyAzMTcuNDIyMzY1LDE3NC40NjkxOTQgMzM1LjA4NzI1MywxOTcuODY5MDMxIEMzMjcuMDAwMzY2LDI3OC45OTgzMjkgMjU2LjE1OTc1MiwzMzguMjU5Njc3IDE3NS43MDc3NjEsMzM0Ljk3MTk3NSBDMTM0Ljc3NDkwMywzMzIuNTEzMDUyIDk5LjAxOTMxMDYsMzE0LjEwNDkzMiA3My40NzgxMzk4LDI4Ni4zNDI1ODQgQzExNy4xNTEyOSwyMjYuMTMwMDIzIDE4Ny44NDI0MzMsMTU4LjI1NDUzMiAyNTEuOTA4MDEsMTU2Ljk3Mjc0MyBMMjUzLjg2MDU3MywxNTYuOTU0Mzc3IFoiIGlkPSLot6/lvoQiIGZpbGwtb3BhY2l0eT0iMC44MDI5MzkyNDgiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTM5LjU1ODIxNzIsMjI3LjQ4Mjk4IEwzOS41ODgzNTkzLDIyNy40NDExNzcgQzU0Ljg0NTE2OCwyMDQuOTc4MDkzIDc5LjI4NDgzNjEsMTgyLjY1OTg0MiAxMTIuMDI0NDIzLDE5MS42NDIyNSBDMTc0LjI4NDMwNCwyMDkuOTczNjk0IDIzMi43MjY2MjcsMjQ3LjUyNjEyOSAyNjguMzU5NDU0LDI0Ni40NjU1NjUgQzMwMi4yNzE0NTgsMjQ1LjQ1NjIxOSAzMTUuOTY1ODI2LDIzNS4zNzI2MzQgMzMwLjgyNDUyOSwyMjEuNTQwMjg4IEMzMTIuNzE3NTU0LDI5MC4yMzg4MiAyNDguMTA0MTQ3LDMzNy45MzA0ODIgMTc1LjcwNzc2MSwzMzQuOTcxOTc1IEMxMTAuMTM3MjAzLDMzMS4wMzMwMTMgNTcuODUyMDI2NiwyODYuMTY2ODEzIDM5LjU1ODIxNzIsMjI3LjQ4Mjk4IFoiIGlkPSLot6/lvoQiIGZpbGwtb3BhY2l0eT0iMC44MDI5MzkyNDgiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTM0OC4wOTk0NzEsMzEwLjkyMzM5OSBMNDA5LjM1OTk2NSwzNjUuOTgyNDA1IEM0MjIuMDUzMTcsMzc3LjM5MDczNCA0MjMuMDgwNDMyLDM5Ni44ODYwNjkgNDExLjY1NTk5MSw0MDkuNTU2MzA4IEM0MDAuMzczNTA4LDQyMi4wNjkxMSAzODEuMTI4Mjg1LDQyMy4yMTM0NDggMzY4LjQzNzQ3Myw0MTIuMjE1OTcyIEwzNjguMDExMzcyLDQxMS44Mzk5MjkgTDMwMy4zMTE5ODgsMzUzLjY4OTUzNSBDMzIwLjMwMTk4OSwzNDEuNzQ0Nzg2IDMzNS40MDg0OTMsMzI3LjMxMjM3IDM0OC4wOTk0NzEsMzEwLjkyMzM5OSBaIE0wLjU2MzQ0NzYxMSwxNzIuNTkxODk5IEM2LjA1OTkyMDcxLDcxLjc2OTQ1ODUgOTQuMDAzNDkwMiwtNS4yMjIyMjMzOSAxOTQuNzcyMTY0LDAuMjc3MTgyNDYzIEMyOTUuNTQwODM3LDcuNjA5NzIzNzQgMzc0LjMyMzYxOCw5My43NjcwODI0IDM2Ni45OTQ5ODcsMTk0LjU4OTUyMyBDMzU5LjY2NjM1NywyOTUuNDExOTYzIDI3My41NTQ5NDUsMzcyLjQwMzY0NSAxNzIuNzg2MjcxLDM2Ni45MDQyMzkgQzcyLjAxNzU5NzgsMzYxLjQwNDgzMyAtNC45MzMwMjU0OCwyNzMuNDE0MzQgMC41NjM0NDc2MTEsMTcyLjU5MTg5OSBaIE0xOTIuNTM2MzI1LDMxLjY5MzcxMDMgQzExMC4wNzYzNjMsMjguMzIzOTUxNSAzNi4wMzA2ODI5LDkyLjM0OTM2MjkgMzIuNjY0OTY5OSwxNzQuOTA4NDQ2IEMyOS4yOTkyNTY5LDI1Ny40Njc1MyA5MS41NjQ5NDI4LDMyOS45MTczMzcgMTc1LjcwNzc2MSwzMzQuOTcxOTc1IEMyNTguMTY3NzI0LDMzOC4zNDE3MzQgMzMwLjUzMDU0OCwyNzYuMDAxMjAxIDMzNS41NzkxMTcsMTkxLjc1NzIzOSBDMzM4LjkxMTE3MiwxMTAuMDIzNzQ3IDI3Ny45MTc4OTQsMzguMTk4MzU1MSAxOTUuMDU0MDAzLDMxLjg2NTUxMDcgTDE5Mi41MzYzMjUsMzEuNjkzNzEwMyBaIiBpZD0i5b2i54q2Ij48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=',
	target: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfkBR0DMy4BaSWgAAAEKUlEQVRYw72YQWwbRRSG/02s2rFSSA5RKlUyOK1DHYfcGrhwiRIaoUg5Aj3kwiVCVRS1VW8IIdp7KwTKhRMEOPTQVFwcGV+aSyltpERGVKKmASHvNlIciQh5m9KPw26c9dpre0PN29PO/PP+mTfz3rw3UghBDLLOOoOEGaZIKLTUr5OS+mV1gISAFuPFkPjUH5MhdCwcVZN+j/q4hjSmjF7VKxqX9KO29FgFbaiov9tQFUzhfkMssMo2jWSbVRYYOsCGWkkVntQHel9Dkiz9rIIeKqqPJH0qW8Ma1YgGJRX1rb7Ub6HW484ryhwFoEKOedLEEeI0FhanESJOmnlyVIACc0Sbr6ee4gRL2ECeWXo5NN4ZnvCEM56WXmbJAzZLnGiLxh04TBawuEK/196IJFtskcSLFv1cxgKyDLekcYekWAM2mfBvKCLCDDNE8I8RE2wCa6Ra0LiGygJ3GasHe4zUqH2Mu0DWMVoziihLwEYjijZsMMYGsOQcgWDYHDbWgaHCSNVoJjZzAeNxtrUAXAlP4aG5BBRIBpNcBfLOiTqKuCctD1xtoMMNII+oMHtUiqqeWSo8coJNfecCkHNcL9AYgSfMg+olBywcIrqq/XHNSLqpvUbxx4XHNKJJTWpEMU+rRwxJ2tNNSTOK1/OPso1JutEMEcLgHCtY7LOPxQpvYwRi05hsM1rTjxDngTzxQIoPKQM73Oc+O8AO84E0PfwAnK8nuQZ8Fji3aco852vO0kcfZ1kGdpgKxF8HrlV7q9u4DFxotKmIHr4HvvLE4+MsA7eI4lfvfBeA5YO/iAbUJxRVQlJESUVk60/9UzO5IY1rR9e1V235Szf0jt5UUr/UILt1UlE9U0RSQhnZMrQr7mFSwsQGypQwKTLtm98U+/zEy56QL/pZx2bCh5ymiEmJMmBjUqLEvS61I8+FulSPNdq4bQ1JDJAiRYY7wCJJUiTo9s0vjUWZ8RpXfIOyc+RrkN0kSJFkEbhDhhQpBtrb+Bi3gW84Xu1/ie+AFWJtbbwh13MfSxo+WJ9PKvpCb+k9STf0UIZe06LeVVmfq+K3jKvtlKvxUFsIZyzzgAeuWzZzxlxjZ2wVVro4x20s9nmKxS2mQoYVOVnUKjDfNAbHGGGSSdLEmsbheWC1ziqdDfXezk5fWv/L9VuTSFz+T4nExVaJRKdToprkbvPIyd1m0+SuCu1smurJ6deAjYYJdzfTTHsDqCfh3gDWwuT1WcDkUl3pkKBIkURd6XARE8i2zOlraIKKoBQm5oEq1/XCFkEeGn851+Me8hIl54DS0245135hWtCmflVEH0v6RM90Sq9r9MiFqW9DO1Vi+9bjfSxIuI8Fv7+Qx4K6FTlfBhOTTKtoXCst31Y8V6okPRWS7HCzb/OVyENlCBnhjBP2vWtXf0jaDTfoXxBSJgmkpHUYAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA1LTI5VDAzOjUxOjM0KzAwOjAwYs79EwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wNS0yOVQwMzo1MTozNCswMDowMBOTRa8AAAAASUVORK5CYII=',
	closeLight: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAABYSURBVDiNY2AYOeD////8FKv5//8//////6////+/D4+aPqgagoa1/4eAflLkiDaMZEPQvPAfSsPZJBmCxRUEXcJElg0kuoZyr1ElsKkS/dROkJRnkeEFAKzLyY+5gUu3AAAAAElFTkSuQmCC',
	closeDark: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAABVSURBVDiNY2AYUYCfGmr4GRgYrjMwMPThUdMHVUPQsHYGBob/DAwM/STKEW0YyYbAQB9UYx8amywAcwVBlzCRawMpgCpeo0pgUyX6qZogqZJFhhEAABK8IjeHVD73AAAAAElFTkSuQmCC'
}

let baseStyles = `
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;500;700&display=swap');
@keyframes jina-bg-rotate {
	100% {
		transform: rotate(1turn);
	}
}

.jina-bg-default{
	position: relative;
	background: #009999;
	border-radius: 50px;
	padding: 1px;
	overflow: hidden;
}

.jina-bg-rainbow {
	position: relative;
	z-index: 0;
	border-radius: 50px;
	overflow-y: hidden;
	padding: 1px;
}

.jina-bg-rainbow:before {
	content: '';
	position: absolute;
	z-index: -2;
	left: -50%;
	top: -450%;
	width: 200%;
	height: 1000%;
	background-color: #399953;
	background-repeat: no-repeat;
	background-size: 50% 50%, 50% 50%;
	background-position: 0 0, 100% 0, 100% 100%, 0 100%;
	background-image: linear-gradient(#399953, #399953), linear-gradient(#fbb300, #fbb300), linear-gradient(#d53e33, #d53e33), linear-gradient(#377af5, #377af5);
	animation: jina-bg-rotate 4s linear infinite;
}

.jina-bg-rainbow:after {
	content: '';
	position: absolute;
	z-index: -1;
	left: 1px;
	top: 1px;
	width: calc(100% - 2px);
	height: calc(100% - 2px);
	background: white;
	border-radius: 50px;
}

.jina-search-input::placeholder{
	opacity: .5;
	font-weight: 700;
	font-size: .75em;
}

.jina-sea {
	width: 300px;
	height: 300px;
	background-color: whitesmoke;
	background-image: linear-gradient(
		#009999,
		rgba(255, 255, 255, 0) 80%,
		rgba(255, 255, 255, 0.5));
	position: relative;
	overflow: hidden;
}

.jina-sea .title {
	color: white;
	font-size: 24px;
	font-family: Comfortaa;
	text-align: center;
	line-height: 250px;
	position: absolute;
	z-index: 1;
	width: 100%;
}

.jina-sea .jina-wave {
	position: absolute;
	top: -250px;
	left: -100px;
	width: 500px;
	height: 500px;
	background: #009999;
	border-radius: 43%;
	filter: opacity(0.4);
	animation: jina-drift linear infinite;
	transform-origin: 50% 48%;
}

.jina-sea .jina-wave:nth-of-type(1) {
	animation-duration: 5s;
}

.jina-sea .jina-wave:nth-of-type(2) {
	animation-duration: 7s;
}

.jina-sea .jina-wave:nth-of-type(3) {
	animation-duration: 9s;
	background-color: #009999;
	filter: opacity(0.1);
}

@keyframes jina-drift {
	from {
		transform: rotate(360deg);
	}
}

.jina-floater-container{
	font-family: Comfortaa;
	position: fixed;
  bottom: 2em;
  right: 2em;
}

.jina-floater{
	background: white;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
	width: 3.5em;
	height: 3.5em;
  border-radius: 50%;
  position: relative;
	cursor: pointer;
	overflow: hidden;
}

.jina-floater-icon{
	width: 1.5em; 
  height: 1.5em;
	position: absolute;
  top: 1em;
	left: 1em;
	transition: .2s;
}

.jina-floater{
	transition: .2s;
}

.jina-floater-large{
	width: 14em;
	height: 14em;
	transition: .2s;
}

.jina-floater-large .jina-floater-icon{
	left: 6em;
	top: 3em;
}

.jina-floater-box{
	position: fixed;
	background: white;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  bottom: 6em;
  right: 2em;
  height: 0px;
  max-height: 65vh;
  width: 300px;
	border-radius: 1em;
	display: none;
	flex-direction: column;
	align-items: stretch;
	font-family: Comfortaa;
	opacity: 0;
}

.jina-search-input{
	font-family: Comfortaa;
	font-size:1em;
	border-radius: 2em;
	border: none;
	outline: none;
	padding: .5em;
	padding-left: 2.25rem;
}

.jina-floater-search-container{
	padding: .5em;
	border-radius: .5em .5em 0em 0em;
	position: relative;
}

.jina-floater-results-container{
	background: whitesmoke;
	align-content: flex-end;
	border: 1px solid white;
	border-radius: .5em;
	margin: .5em;
	height: 100%;
	overflow-y: auto;
	transition: .2s;
}

.jina-floater-file-input{
	display: none;
}

.jina-floater-result,
.jina-result{
	background: white;
	padding: .5em;
	margin: .5em;
	margin-bottom: 1em;
  border-radius: .25em;
	cursor: pointer;
	transition: .2s;
}

.jina-floater-result:hover,
.jina-result:hover{
	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.jina-results-area{
	font-family: Comfortaa;
	padding: .5em;
	height: 100%;
	overflow-y: auto;
}

.jina-highlighted{
	border-color: #009999;
}

.jina-search-icon{
	width: 1.25em; 
  height: 1.25em;
	position: absolute;
  top: .5rem;
	left: .55rem;
	padding-right: .25em;
}

.jina-border-right{
	border-right: 1px solid #009999;
}

.jina-floater-instructions{
	text-align: center;
	opacity: .5;
}

.jina-results-label{
	font-family: Comfortaa;
	margin-top: 0px;
	margin-left: .5em;
	opacity: .5;
}

.jina-search-container{
	position: relative;
}

.jina-persian{
	border-color: #009999;
}

.jina-searchbar-container{
	max-width: 300px;
	position: relative;
}

.jina-expander{
	font-family: Comfortaa;
	position: absolute;
	top: 0;
	background-color: whitesmoke;
	width: 100%;
	border-radius: 1.1em;
	padding-top: 0em;
	padding-bottom: 0em;
	text-align: center;
	opacity: 0;
	height: 0px;
	transition: .2s;
	overflow: hidden;
	max-height: 65vh;
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
	display: flex;
	flex-direction: column;
}

.jina-expander-results-area{
	margin-top: 3em;
	background: whitesmoke;
	overflow-y: scroll;
	padding-bottom: .5em;
	flex: fill;
}

.jina-expander-close{
	cursor: pointer;
	color: white;
	padding-top: .5em;
	padding-bottom: .5em;
	background: #009999;
}

.jina-contained{width:100%;box-sizing: border-box;}

.jina-floater-label{
	font-family: Comfortaa;
	text-align: center;
	padding-top: 4em;
	padding-right: 2.5em;
	padding-left: 2.5em;
	color: #009999;
	opacity: 0;
	font-size: 1px;
	transition: .2s;
}

.jina-floater-large .jina-floater-label{
	font-size: 1.25em;
	opacity: 1;
}

.jina-expander-label{
	font-family: Comfortaa;
	text-align: center;
	color: white;
}

.jina-dropdown-message{
	font-family: Comfortaa;
	padding-top: 8em;
	padding-bottom: 3em;
	padding-right: .5em;
	padding-left: .5em;
	height: 100%;
}

.jina-error{
	background: linear-gradient(to bottom left, #EF8D9C 40%, #FFC39E 100%);;
}

.jina-success{
	background: linear-gradient(to bottom right, #009999 40%, #32C8CD 100%);
}

.jina-dropdown-message h3{
  font-weight: 100;
  letter-spacing: 3px;
  padding-top: 5px;
  color: white;
  padding-bottom: 5px;
	text-transform: uppercase;
}

.jina-dropdown-message p{
	color: white;
}

.jina-dropdown-message button{
	font-family: Comfortaa;
	padding: .5em;
	font-size: 1em;
	padding-left: 1em;
	padding-right: 1em;
	border: none;
	border-radius: 20px;
	cursor: pointer;
	outline: none;
}

.jina-face {
  position: absolute;
  width: 4em;
  height: 4em;
  background: white;
  border-radius: 50%;
  top: 4em;
  left: 37.5%;
  z-index: 2;
  animation: jina-animation-bounce 1s ease-in infinite;
}

.jina-shadow {
  position: absolute;
  width: 3.75em;
  height: .75em;
  opacity: .5;
  background: #777777;
  left: 7.25em;
  top: 8em;
  border-radius: 50%;
  z-index: 1;
}

.jina-scale {
  animation: jina-animation-scale 1s ease-in infinite;
}
.jina-move {
  animation: jina-animation-move 3s ease-in-out infinite;
}

@keyframes jina-animation-scale {
  50% {
    transform: scale(0.9);
  }
}

@keyframes jina-animation-move {
  0% {
    left: 25%;
  }
  50% {
    left: 60%;
  }
  100% {
    left: 25%;
  }
}

@keyframes jina-animation-bounce {
  50% {
     transform: translateY(-15px);
	}
}
.jina-expander-overlay{
	position: fixed;
	left: 0;
	top: 0;
	right: 0; 
	bottom: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0,0,0,.5);
	display: none;
	opacity: 0;
	transition: .2s;
}
`

let stylesElement = document.createElement('style');
stylesElement.innerHTML = baseStyles
document.body.appendChild(stylesElement);

let defaultPlaceholders = ['type or drag anything to search', 'powered by Jina', 'unleash your curiosity and happy searching'];

let defaultSettings = {
	showResults: true,
	typewriterDelayCharacter: 50,
	typewriterDelayItem: 1000,
	styleTheme: 'persian',
	searchIcon: 'color',
	floaterIcon: 'color',
	globalDrag: true,
}

class Floater extends HTMLElement {
	constructor() {
		super();

		const customSettings = JSON.parse(this.getAttribute('settings'));
		this.settings = {
			...defaultSettings,
			...customSettings,
		}

		this.floaterIcon = _icons[this.settings.floaterIcon] || this.settings.floaterIcon;
		const searchIcon = _icons[this.settings.searchIcon] || this.settings.searchIcon;

		this.originalSearchIcon = searchIcon;

		this.innerHTML = `
		<div class="jina-floater-container">
			<div class="jina-floater" id="jina-floater-icon">
				<img src="${this.floaterIcon}" class="jina-floater-icon"/>
				<h3 class="jina-floater-label">Drop here to search</h3>
			</div>
		</div>
		<div class="jina-floater-box" id="jina-floater-box">
			<div class="jina-floater-search-container">
				<div id="jina-floater-background-search-container" class="jina-bg-default">
					<div class="jina-search-container">
						<img src="${searchIcon}" class="jina-search-icon" id="jina-floater-search-icon" />
						<input placeholder="search" class="jina-search-input jina-contained" id="jina-floater-search-box" autocomplete="off">
					</div>
				</div>
			</div>
			<div class="jina-floater-results-container" id="jina-floater-drop-area">
				<input type="file" id="jina-floater-file-input" class="jina-floater-file-input" multiple>
				<h2 class="jina-floater-instructions">Search or Drop Files</h2>
			</div>
		</div>
		`;

		this.showBox = false;
		this.dragCounter = 0;

		this.jinaButton = document.getElementById('jina-floater-icon');
		this.dropArea = document.getElementById('jina-floater-drop-area');
		this.searchInput = document.getElementById('jina-floater-search-box');
		this.searchBackground = document.getElementById('jina-floater-background-search-container');
		this.floaterBox = document.getElementById('jina-floater-box');
		this.searchIcon = document.getElementById('jina-floater-search-icon');

		this.jinaButton.addEventListener('click', this.toggleShow);

		['drag', 'dragenter', 'dragover', 'dragleave', 'dragexit', 'drop'].forEach(eventName => {
			document.addEventListener(eventName, this.preventDefaults, false);
		});
		['dragenter'].forEach(eventName => {
			document.addEventListener(eventName, this.handleDrag, false);
		});
		['dragleave', 'drop', 'dragexit'].forEach(eventName => {
			document.addEventListener(eventName, this.handleDragLeave, false);
		});

		this.dropArea.addEventListener('drop', this.handleDrop, false);
		this.jinaButton.addEventListener('drop', this.handleDrop, false);
		this.searchInput.addEventListener('drop', this.handleDrop, false);

		this.searchInput = document.getElementById('jina-floater-search-box');
		this.searchInput.addEventListener('keydown', this.listenForEnter);
		this.searchInput.addEventListener('focus', this.highlightSearch);
		this.searchInput.addEventListener('blur', this.unhighlightSearch);

		const placeholders = JSON.parse(this.getAttribute('placeholders'));
		console.log('settings: ', this.settings)
		typeWriter('#jina-floater-search-box', placeholders || defaultPlaceholders, 0, 0, this.settings.typewriterDelayCharacter, this.settings.typewriterDelayItem);
	}

	listenForEnter = (key) => {
		if (key.keyCode == 13) {
			this.search()
		}
	}

	async search(query = [this.searchInput.value], inBytes = false) {
		if (!inBytes) {
			this.searchIcon.src = this.originalSearchIcon;
			this.searchIcon.classList.remove('jina-border-right');
		}
		console.log('query: ', query);
		console.log('searching...');
		let response;
		try {
			response = await window.JinaBox.search(query, 10, inBytes);
			this.dropped = false;
		}
		catch (e) {
			this.dropped = false;
			return console.log('error');
		}
		console.log('response:', response);
		let results = [];
		let { docs } = response.search;
		for (let i = 0; i < docs.length; ++i) {
			let docResults = docs[i];
			let { topkResults } = docResults;
			for (let j = 0; j < topkResults.length; ++j) {
				const res = topkResults[j];
				results.push({ data: res.matchDoc.uri, score: res.score.value, contentType: res.matchDoc.uri.startsWith('data:image/') ? 'image' : 'text' });
			}
		}
		this.results = results;
		let html = '';
		console.log('results before:', this.results);
		this.results = this.results.sort((a, b) => { return b.score - a.score });
		console.log('results after:', this.results);
		html += `<p class="jina-floater-results-label">results for ${inBytes ? `${query.length} image input${query.length > 1 ? 's' : ''}` : `"${query}"`}</p>`;
		this.results.map((result, idx) => {
			html += `<div class="jina-floater-result" id="jina-floater-result-${idx}">${result.contentType === 'text' ? result.data : `<img src="${result.data}" class="jina-result-image"/>`}</div>`;
		});
		this.dropArea.innerHTML = html;
		this.results.map((result, idx) => {
			let resultElement = document.getElementById(`jina-floater-result-${idx}`);
			resultElement.addEventListener('click', () => { this.search([result.data], result.data.startsWith('data:image/')) });
		})
	}

	preventDefaults = (e) => {
		e.preventDefault()
		e.stopPropagation()
	}
	handleDrag = () => {
		this.dragCounter++;
		if (this.showBox) {
			this.highlightArea();
			this.highlightSearch();
		}
		else {
			this.showLargeFloater();
		}
	}
	handleDragLeave = () => {
		this.dragCounter--;
		if (this.dragCounter < 1) {
			if (this.showBox) {
				this.unhighlightArea();
				this.unhighlightSearch();
			}
			else {
				this.hideLargeFloater();
			}
			this.dragCounter = 0;
		}
	}

	handleDrop = async (e) => {
		console.log('handle drop files');
		let dt = e.dataTransfer;
		let imgsrc = dt.getData('URL');
		this.handleDragLeave();
		if (!this.showBox)
			this.toggleShow()
		if (imgsrc) {
			if (imgsrc.startsWith('data:')) {
				this.search([imgsrc], true);
				this.searchIcon.src = imgsrc;
				this.searchIcon.classList.add('jina-border-right');
			}
			else {
				let dataURI;
				try {
					dataURI = await getDataUri(imgsrc);
				}
				catch (e) {
					dataURI = imgsrc;
				}
				console.log('dataUri:', dataURI);
				this.searchIcon.src = dataURI;
				this.searchIcon.classList.add('jina-border-right');
				this.search([imgsrc], true);
			}
		}
		else {
			let acceptedFiles = dt.files;
			let processedFiles = [];
			console.log('files: ', acceptedFiles)
			for (let i = 0; i < acceptedFiles.length; ++i) {
				const file = acceptedFiles[i];
				let reader = new FileReader();
				reader.addEventListener("load", () => {
					const processed = reader.result;
					processedFiles.push(processed);
					if (processedFiles.length === acceptedFiles.length) {
						this.search(processedFiles, true)
						this.searchIcon.src = processedFiles[0];
						this.searchIcon.classList.add('jina-border-right');
					}
					console.log('processed: ', processed);
				}, false);
				reader.readAsDataURL(file);
			}
		}
	}

	toggleShow = () => {
		console.log('toggle show');
		this.showBox = !this.showBox;
		if (this.showBox) {
			this.floaterBox.style.opacity = '1'
			this.floaterBox.style.display = 'flex';
			this.floaterBox.style.height = '500px'
			document.querySelector('#jina-floater-icon img').src = _icons.closeDark;
		}
		else {
			this.floaterBox.opacity = '0';
			this.floaterBox.height = '0px';
			this.floaterBox.style.display = 'none';
			document.querySelector('#jina-floater-icon img').src = this.floaterIcon
		}
	}

	showLargeFloater = () => {
		this.jinaButton.classList.add('jina-floater-large')
	}

	hideLargeFloater = () => {
		this.jinaButton.classList.remove('jina-floater-large')
	}

	highlightArea = () => {
		this.dropArea.classList.add('jina-highlighted')
	}
	unhighlightArea = () => {
		this.dropArea.classList.remove('jina-highlighted')
	}

	highlightSearch = () => {
		this.searchBackground.classList.add('jina-bg-rainbow');
		this.searchInput.classList.add('jina-highlighted')
	}
	unhighlightSearch = () => {
		this.searchBackground.classList.remove('jina-bg-rainbow');
		this.searchInput.classList.remove('jina-highlighted')
	}
}

class SearchBar extends HTMLElement {
	constructor() {
		super();

		const customSettings = JSON.parse(this.getAttribute('settings'));
		this.settings = {
			...defaultSettings,
			...customSettings,
		}

		this.originalSearchIcon = _icons[this.settings.searchIcon] || this.settings.searchIcon;
		this.innerHTML = `
		<div class="jina-expander-overlay" id="jina-expander-overlay"></div>
		<div class="jina-searchbar-container">
			<div class="jina-expander" id="jina-search-expander"></div>
			<div id="jina-searchbar-background-container" class="jina-bg-default">
				<div class="jina-search-container">
					<img src="${this.originalSearchIcon}" class="jina-search-icon" id="jina-search-icon" />
					<input placeholder="search" class="jina-search-input jina-contained" id="jina-search-input" autocomplete="off">
				</div>
			</div>
		</div>
		`;

		this.overlay = document.getElementById('jina-expander-overlay');
		this.expander = document.getElementById('jina-search-expander');
		this.searchInput = document.getElementById('jina-search-input');
		this.searchIcon = document.getElementById('jina-search-icon');

		this.dragCounter = 0;

		['drag', 'dragenter', 'dragover', 'dragleave', 'dragexit', 'drop'].forEach(eventName => {
			document.addEventListener(eventName, this.preventDefaults);
		});
		['dragenter'].forEach(eventName => {
			document.addEventListener(eventName, this.handleDrag);
		});
		['dragleave', 'drop', 'dragexit'].forEach(eventName => {
			document.addEventListener(eventName, this.handleDragLeave);
		});

		this.overlay.addEventListener('click',this.clearExpander);
		this.searchInput.addEventListener('drop', this.handleDrop);
		this.expander.addEventListener('drop', this.handleDrop);

		this.searchInput.addEventListener('keydown', this.listenForEnter);

		const placeholders = JSON.parse(this.getAttribute('placeholders'));
		typeWriter('#jina-search-input', placeholders || defaultPlaceholders);
	}

	async search(query = [this.searchInput.value], inBytes = false) {
		if (!inBytes) {
			this.searchIcon.src = this.originalSearchIcon;
			this.searchIcon.classList.remove('jina-border-right');
		}
		this.showLoading();
		console.log('searching...');
		let response;
		try {
			response = await window.JinaBox.search(query, 10, inBytes);
			this.dropped = false;
		}
		catch (e) {
			this.dropped = false;
			console.log('error');
			return this.showError(e);
		}
		console.log('response:', response);
		let results = [];
		let { docs } = response.search;
		for (let i = 0; i < docs.length; ++i) {
			let docResults = docs[i];
			let { topkResults } = docResults;
			for (let j = 0; j < topkResults.length; ++j) {
				const res = topkResults[j];
				results.push({ data: res.matchDoc.uri, score: res.score.value, contentType: res.matchDoc.uri.startsWith('data:image/') ? 'image' : 'text' });
			}
		}
		this.results = results;
		this.results = this.results.sort((a, b) => { return b.score - a.score });
		let html = '';
		console.log('this.results:', this.results);
		html += `<p class="jina-results-label">results for ${inBytes ? `${query.length} image input${query.length > 1 ? 's' : ''}` : `"${query}"`}</p>`;
		this.results.map((result, idx) => {
			html += `<div class="jina-result" id="jina-result-${idx}">${result.contentType === 'text' ? result.data : `<img src="${result.data}" class="jina-result-image"/>`}</div>`;
		});
		if (this.settings.showResults)
			this.showResults(html);
		else {
			this.resultsArea = document.getElementById('jina-results-area')
			this.resultsArea.innerHTML = html;
			this.clearExpander()
		}
		this.results.map((result, idx) => {
			let resultElement = document.getElementById(`jina-result-${idx}`);
			resultElement.addEventListener('click', () => {
				this.search([result.data], true)
				this.searchIcon.src = result.data;
				this.searchIcon.classList.add('jina-border-right');
			});
		})
	}

	listenForEnter = (key) => {
		if (key.keyCode == 13) {
			this.search()
		}
	}

	preventDefaults = (e) => {
		e.preventDefault()
		e.stopPropagation()
	}

	handleDrop = async (e) => {
		this.dropped = true;
		console.log('handle drop files');
		console.log('drop event:', e);
		let dt = e.dataTransfer;
		let imgsrc = dt.getData('URL')
		console.log('imgsrc: ', imgsrc)
		if (imgsrc) {
			if (imgsrc.startsWith('data:')) {
				this.search([imgsrc], true);
				this.searchIcon.src = imgsrc;
				this.searchIcon.classList.add('jina-border-right');
			}
			else {
				let dataURI;
				try {
					dataURI = await getDataUri(imgsrc);
				}
				catch (e) {
					dataURI = imgsrc;
				}
				console.log('dataUri:', dataURI);
				this.searchIcon.src = dataURI;
				this.searchIcon.classList.add('jina-border-right');
				this.search([imgsrc], true);
			}
		}
		else {
			let acceptedFiles = dt.files;
			let processedFiles = [];
			console.log('files: ', acceptedFiles)
			for (let i = 0; i < acceptedFiles.length; ++i) {
				const file = acceptedFiles[i];
				let reader = new FileReader();
				reader.addEventListener("load", () => {
					const processed = reader.result;
					processedFiles.push(processed);
					if (processedFiles.length === acceptedFiles.length) {
						this.search(processedFiles, true)
						this.searchIcon.src = processedFiles[0];
						this.searchIcon.classList.add('jina-border-right');
					}
					console.log('processed: ', processed);
				}, false);
				reader.readAsDataURL(file);
			}
		}
	}

	handleDrag = () => {
		this.dragCounter++;
		if (!this.highlighted) {
			this.searchInput.classList.add('jina-highlighted');
			this.expander.style.height = '300px';
			this.expander.style.opacity = 1;
			this.expander.innerHTML = `
			<div class="jina-dropdown-message jina-success">
    		<div class="jina-face"></div>
    		<div class="jina-shadow jina-scale"></div>
				<h3 class="alert">Drop here to search</h3>
			</div>
			`
			this.highlighted = true;
		}
	}

	handleDragLeave = () => {
		this.dragCounter--;
		if (this.dragCounter < 1) {
			this.searchInput.classList.remove('jina-highlighted');
			if (!this.dropped) {
				this.expander.style.height = '0px';
				this.expander.style.opacity = 0;
				this.clearExpander();
			}
			this.dragCounter = 0;
		}
	}

	showLoading = () => {
		this.expander.style.height = '300px';
		this.expander.style.opacity = 1;
		this.expander.innerHTML = `
		<div class="jina-sea">
			<p class="title">Searching</p>
			<span class="jina-wave"></span>
			<span class="jina-wave"></span>
			<span class="jina-wave"></span>
		</div>
		`
	}

	showError = (message = 'could not reach server') => {
		this.expander.style.height = '300px';
		this.expander.style.opacity = 1;
		this.expander.innerHTML = `
		<div class="jina-dropdown-message jina-error">
    	<div class="jina-face jina-move"></div>
   		<div class="jina-shadow jina-move"></div>
			<h3 class="alert">Error!</h3>
			<p>${message}</p>
			<button id="jina-searchbar-error-ok">Ok</button>
		</div>
		`
		this.errorButton = document.getElementById('jina-searchbar-error-ok')
		this.errorButton.onclick = this.clearExpander;
	}

	showResults = (results) => {
		//TODO: settings > expander height
		this.overlay.style.display = 'block';
		this.overlay.style.opacity = '1';
		this.expander.style.height = '500px';
		this.expander.innerHTML = `
		<div class="jina-expander-results-area">
		${results}
		</div>
		`;
	}

	clearExpander = async () => {
		this.overlay.style.display = 'none';
		this.overlay.style.opacity = '0';
		this.dragCounter = 0;
		this.searchInput.classList.remove('jina-highlighted');
		this.expander.style.height = '0px';
		this.expander.style.opacity = 0;
		this.expander.style.transition = '.2s';
		//TODO: settings > animation speed
		await waitFor(.2);
		this.expander.innerHTML = '';
		this.highlighted = false;
	}
}

class Results extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = `
		<div class="jina-results-area" id="jina-results-area"></div>
		`;
		this.dropArea = document.getElementById('jina-search-input');
		this.dropArea.addEventListener('dragenter', this.handleDrag)
		this.dropArea.addEventListener('drop', this.handleDrop);
		this.dropArea.addEventListener('dragleave', this.handleDragLeave);
	}
	handleDrag = function () {
		console.log('handle drag enter');
	}
	handleDragLeave = function () {
		console.log('handle drag leave');
	}
}

window.customElements.define('jina-floater', Floater);
window.customElements.define('jina-searchbar', SearchBar);
window.customElements.define('jina-results', Results);

window.JinaBox = {
	init: function (url) {
		_url = url;
		console.log('initialized with ', url);
	},
	search: async function (data, top_k = 10) {
		return new Promise(function (resolve, reject) {
			var xhr = new XMLHttpRequest();
			xhr.open("POST", _url);
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.onload = () => resolve(JSON.parse(xhr.responseText))
			xhr.onerror = function (e) {
				console.log('xhr error:', e);
				reject(e);
			}
			//TODO: add to settings
			xhr.timeout = 15000;
			xhr.ontimeout = () => reject('Search Timeout');
			xhr.send(JSON.stringify({ data, top_k, mode: 'search' }));
		})
	}
}

function getDataUri(url) {
	return new Promise(function (resolve, reject) {
		var xhr = new XMLHttpRequest();
		xhr.responseType = "arraybuffer";
		xhr.open("GET", `${url}`);

		xhr.onload = function () {
			var base64, binary, bytes, mediaType;

			bytes = new Uint8Array(xhr.response);
			//NOTE String.fromCharCode.apply(String, ...
			//may cause "Maximum call stack size exceeded"
			binary = [].map.call(bytes, function (byte) {
				return String.fromCharCode(byte);
			}).join('');
			mediaType = xhr.getResponseHeader('content-type');
			base64 = [
				'data:',
				mediaType ? mediaType + ';' : '',
				'base64,',
				btoa(binary)
			].join('');
			resolve(base64);
		};
		xhr.onerror = function (e) {
			console.log('xhr error:', e);
			reject(e);
		}
		xhr.send();
	})
}

function typeWriter(selector_target, text_list, i = 0, text_list_i = 0, delay_next_char = 100, delay_next_item = 1000, ) {
	if (!i) {
		document.querySelector(selector_target).placeholder = "";
	}
	txt = text_list[text_list_i];
	if (i < txt.length) {
		document.querySelector(selector_target).placeholder += txt.charAt(i);
		i++;
		setTimeout(typeWriter, delay_next_char, selector_target, text_list, i, text_list_i, delay_next_char, delay_next_item);
	}
	else {
		text_list_i++;
		if (typeof text_list[text_list_i] === "undefined") {
			setTimeout(typeWriter, delay_next_item, selector_target, text_list, 0, 0, delay_next_char, delay_next_item);
		}
		else {
			i = 0;
			setTimeout(typeWriter, delay_next_item, selector_target, text_list, i, text_list_i, delay_next_char, delay_next_item);
		}
	}
}


function waitFor(seconds) {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(), seconds * 1000)
	})
}