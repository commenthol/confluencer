const cnflStyle = `
<style>
img.emoticon {
  vertical-align: text-bottom;
  width: 16px;
  height: 16px
}

.wysiwyg-macro {
  background-color: #f0f0f0;
  background-position: 0 0;
  background-repeat: no-repeat;
  border: 1px solid #ddd
}

.wysiwyg-macro {
  padding: 24px 2px 2px 2px;
  width: 100%;
  background-size: 20px 20px;
}

.wysiwyg-macro[data-macro-name=info] {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iLS41IC0uNSA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiA8bWV0YWRhdGE+CiAgPHJkZjpSREY+CiAgIDxjYzpXb3JrIHJkZjphYm91dD0iIj4KICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgPGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIvPgogICAgPGRjOnRpdGxlLz4KICAgPC9jYzpXb3JrPgogIDwvcmRmOlJERj4KIDwvbWV0YWRhdGE+CiA8ZyB0cmFuc2Zvcm09Im1hdHJpeCguNzQ0MTkgMCAwIC43NDQxOSAtLjUgLjk4ODM3KSI+CiAgPGNpcmNsZSBjeD0iNDMiIGN5PSI0MSIgcj0iNDAiIGZpbGw9IiNmZmYiIHBvaW50ZXItZXZlbnRzPSJhbGwiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSI2Ii8+CiAgPHRleHQgeD0iMzUuNzAzMTI1IiB5PSI2My4wMTU2MjUiIGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJDYXJsaXRvIiBmb250LXNpemU9IjQwcHgiIGxldHRlci1zcGFjaW5nPSIwcHgiIHdvcmQtc3BhY2luZz0iMHB4IiBzdHlsZT0iZm9udC1mZWF0dXJlLXNldHRpbmdzOm5vcm1hbDtmb250LXZhcmlhbnQtY2Fwczpub3JtYWw7Zm9udC12YXJpYW50LWxpZ2F0dXJlczpub3JtYWw7Zm9udC12YXJpYW50LW51bWVyaWM6bm9ybWFsO2xpbmUtaGVpZ2h0OjEuMjUiIHhtbDpzcGFjZT0icHJlc2VydmUiPjx0c3BhbiB4PSIzNS43MDMxMjUiIHk9IjYzLjAxNTYyNSIgZm9udC1zaXplPSI2NHB4Ij5pPC90c3Bhbj48L3RleHQ+CiA8L2c+Cjwvc3ZnPgo=);
}

.wysiwyg-macro[data-macro-name=note] {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iLS41IC0uNSA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiA8bWV0YWRhdGE+CiAgPHJkZjpSREY+CiAgIDxjYzpXb3JrIHJkZjphYm91dD0iIj4KICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgPGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIvPgogICAgPGRjOnRpdGxlLz4KICAgPC9jYzpXb3JrPgogIDwvcmRmOlJERj4KIDwvbWV0YWRhdGE+CiA8ZyB0cmFuc2Zvcm09Im1hdHJpeCguNjAzNzcgMCAwIC42MDM3NyA2LjE1MjUgLS41KSIgcG9pbnRlci1ldmVudHM9ImFsbCI+CiAgPHBhdGggZD0ibTMgM2g1MGwzMCAzMHY3MGgtODB6IiBmaWxsPSIjZmZmIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSI2Ii8+CiAgPHBhdGggZD0ibTUzIDN2MzBoMzB6IiBmaWxsLW9wYWNpdHk9Ii4wNSIvPgogIDxwYXRoIGQ9Im01MyAzdjMwaDMwIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSI2Ii8+CiA8L2c+Cjwvc3ZnPgo=);
}

.wysiwyg-macro[data-macro-name=plantuml] {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDEyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgNTE0NDgpICAtLT4KPHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDM1NC4zNDYgNjU5LjA1NSIgb3ZlcmZsb3c9InZpc2libGUiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDY0IDY0IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PG1ldGFkYXRhPjxyZGY6UkRGPjxjYzpXb3JrIHJkZjphYm91dD0iIj48ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD48ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+PGRjOnRpdGxlLz48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXJHcmFkaWVudDU0NDIiIHgxPSItNzUwLjUiIHgyPSItNzI5LjUiIHkxPSIzMTkuMDUiIHkyPSIzMTkuMDUiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLjE0MzA0IDAgMCAuMTQzMDQgMjk0LjYyIDY2My45NSkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjODA4MDgwIiBvZmZzZXQ9IjAiLz48c3RvcCBzdG9wLWNvbG9yPSIjODA4MDgwIiBzdG9wLW9wYWNpdHk9IjAiIG9mZnNldD0iMSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXJHcmFkaWVudDU0NTAiIHgxPSItNjIxLjUiIHgyPSItNjAwLjUiIHkxPSIzNDguMyIgeTI9IjM0OC4zIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC4xNDMwNCAwIDAgLjE0MzA0IDI5MC40NyA2NTkuNzYpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzgwODA4MCIgb2Zmc2V0PSIwIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzgwODA4MCIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjEiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyR3JhZGllbnQ1NDU4IiB4MT0iLTUyMS41IiB4Mj0iLTUwMC41IiB5MT0iMzQ4LjMiIHkyPSIzNDguMyIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCguMTQzMDQgMCAwIC4xNDMwNCAyOTAuNDcgNjU5Ljc2KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiM4MDgwODAiIG9mZnNldD0iMCIvPjxzdG9wIHN0b3AtY29sb3I9IiM4MDgwODAiIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIxIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhckdyYWRpZW50NTQ5NiIgeDE9Ii01NjAuNSIgeDI9Ii00NzQuNSIgeTE9IjExNC4xIiB5Mj0iMTE0LjEiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLjE0MzA0IDAgMCAuMTQzMDQgMjk0LjYyIDY2My45NSkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjODA4MDgwIiBvZmZzZXQ9IjAiLz48c3RvcCBzdG9wLWNvbG9yPSIjODA4MDgwIiBzdG9wLW9wYWNpdHk9IjAiIG9mZnNldD0iMSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXJHcmFkaWVudDU2MTgiIHgxPSIxODguNjgiIHgyPSIzMDQuNjgiIHkxPSI2MDMuNTMiIHkyPSI2MDMuNTMiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLjE0MzA0IDAgMCAuMTQzMDQgMTM2LjY4IDYyMC40KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiMwMDc0YmQiIG9mZnNldD0iMCIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMDc0YmQiIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIxIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhckdyYWRpZW50NTYyNiIgeDE9IjU0My42OCIgeDI9IjU5NC42OCIgeTE9IjQ4OC40MiIgeTI9IjQ4OC40MiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCguMTQzMDQgMCAwIC4xNDMwNCAxMzYuNjggNjIwLjQpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzAwNzRiZCIgb2Zmc2V0PSIwIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzAwNzRiZCIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTYzLjE4IC02NTUuNjIpIj48ZyBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iLjE0MzA0cHgiPjxwYXRoIGQ9Im0yMDUuMjIgNjkwLjk5IDE2LjQ0OSAxMC4wMTMtMTIuODczIDcuMTUxOS0xNi40NDktMTAuMDEzeiIgZmlsbD0iIzE2MDAzYSIvPjxwYXRoIGQ9Im0xOTAuOTIgNjkwLjk5IDE2LjQ0OSAxMC4wMTMtMTIuODczIDcuMTUxOS0xNi40NDktMTAuMDEzeiIgZmlsbD0iI2ZmYmEzOSIvPjxwYXRoIGQ9Im0xNzYuNjEgNjkwLjk5IDE2LjQ0OSAxMC4wMTMtMTIuODczIDcuMTUxOS0xNi40NDktMTAuMDEzeiIgZmlsbD0iIzk5MTAzOSIvPjwvZz48Zz48ZyB0cmFuc2Zvcm09Im1hdHJpeCguMTY4NTkgLS4wODY1MSAuMTc2MDYgLjEwNzUyIDI1NS41MSA1ODIuNDkpIiBhcmlhLWxhYmVsPSJVIj48cGF0aCBkPSJtLTg0OC4yNCAzNzEuMzVoOC4yOTY3djE2LjA0M3EwIDIuMzg2Mi0wLjc1MjU4IDQuNTE1NS0wLjczNDIyIDIuMTEwOS0yLjMzMTIgMy43MDc4LTEuNTc4NiAxLjU3ODYtMy4zMjI0IDIuMjIxLTIuNDIyOSAwLjg5OTQyLTUuODE4NyAwLjg5OTQyLTEuOTY0IDAtNC4yOTUyLTAuMjc1MzMtMi4zMTI4LTAuMjc1MzQtMy44NzMtMS4wODMtMS41NjAyLTAuODI2LTIuODYzNS0yLjMzMTItMS4yODQ5LTEuNTA1Mi0xLjc2MjEtMy4xMDIxLTAuNzcwOTMtMi41Njk4LTAuNzcwOTMtNC41NTIydi0xNi4wNDNoOC4yOTY3djE2LjQyOHEwIDIuMjAyNyAxLjIxMTUgMy40NTA4IDEuMjI5OCAxLjIyOTggMy4zOTU4IDEuMjI5OCAyLjE0NzYgMCAzLjM1OTEtMS4yMTE1IDEuMjI5OC0xLjIyOTggMS4yMjk4LTMuNDY5MnoiIGZpbGw9IiNmZmYiLz48L2c+PGcgdHJhbnNmb3JtPSJtYXRyaXgoLjE2ODU5IC0uMDg2NTEgLjE3NjA2IC4xMDc1MiAyODQuMTQgNTgyLjI1KSIgYXJpYS1sYWJlbD0iTCI+PHBhdGggZD0ibS04NjUuNzUgMzcxLjM1aDguMzE1MXYyMC4yODNoMTIuOTc3djYuNjI2NGgtMjEuMjkyeiIgZmlsbD0iI2ZmZiIvPjwvZz48ZyB0cmFuc2Zvcm09Im1hdHJpeCguMTY4NTkgLS4wODY1MSAuMTc2MDYgLjEwNzUyIDI2OS44MyA1ODIuMjQpIiBhcmlhLWxhYmVsPSJNIj48cGF0aCBkPSJtLTg2NS44NCAzNzEuMzVoMTAuOTRsNC4yMjE4IDE2LjM3MyA0LjIwMzQtMTYuMzczaDEwLjkwM3YyNi45MDloLTYuNzkxNnYtMjAuNTIybC01LjI2OCAyMC41MjJoLTYuMTQ5MWwtNS4yNDk3LTIwLjUyMnYyMC41MjJoLTYuODA5OXoiIGZpbGw9IiNmZmYiLz48L2c+PC9nPjxnPjxyZWN0IHg9IjcyLjU2MiIgeT0iNjQzLjkyIiB3aWR0aD0iMCIgaGVpZ2h0PSIwIiBmaWxsPSIjMDBmIiBzdHJva2Utd2lkdGg9Ii4xNDMwNCIvPjxnIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIuMTQzMDRweCI+PHBhdGggZD0ibTIyMS42NCA3MDAuOTctNy4xMjY1LTQuMjU5M3YtMTcuMTY1bDcuMTUxOSA0LjI5MTF6IiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50NTYyNikiLz48cGF0aCBkPSJtMjIxLjY3IDY4My44NSA1LjAwNjQtMi44NzUtNy4xNTE5LTQuMjkxMS01LjAwNjMgMi44NjA4eiIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudDU0OTYpIi8+PHBhdGggZD0ibTE2My43NCA2OTguMTQgMTYuNDQ5IDEwLjAxM3Y3LjE1MTlsLTE2LjQ0OS0xMC4wMTN6IiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50NTYxOCkiLz48cGF0aCBkPSJtMTgwLjE5IDcxNS4zdi03LjE1MTlsMTIuODczLTcuMTUxOSAxLjQzMDQgNy4xNTE5IDEyLjg3My03LjE1MTkgMS40MzA0IDcuMTUxOSAxMi44NzMtNy4xNTE5di0xNy4xNjVsNS4wMDYzLTIuODYwOHYzNC4zMjl6IiBmaWxsPSIjZmZmIi8+PC9nPjwvZz48cGF0aCBkPSJtMjIyLjI3IDY3Mi42OGMxLjQzNzIgMS42NTQ0LTAuMzc2ODUgMy4xNDE5LTAuMzc2ODUgMy4xNDE5czMuNjQ3MS0xLjg4MjQgMS45NzI1LTQuMjQwOGMtMS41NjQ2LTIuMTk4My0yLjc2NDEtMy4yOTA0IDMuNzI5OC03LjA1NjQgN2UtNSAwLTEwLjE5NCAyLjU0NTMtNS4zMjU1IDguMTU1NHoiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2VhMmQyZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2Utd2lkdGg9Ii4xNDMwNCIvPjxwYXRoIGQ9Im0yMjMuODcgNjU4LjQ0czMuMDkzNSAzLjA5NTMtMi45MzUgNy44NTM3Yy00LjgzNDUgMy44MTg1LTEuMTAyMyA1Ljk5NDktMmUtMyA4LjQ4MjgtMi44MjIzLTIuNTQ2MS00Ljg5MjMtNC43ODc4LTMuNTAzOC02Ljg3MzggMi4wMzktMy4wNjE2IDcuNjg4NC00LjU0NjUgNi40NDA2LTkuNDYyNnoiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2VhMmQyZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2Utd2lkdGg9Ii4xNDMwNCIvPjxnIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIuMTQzMDQiPjxwYXRoIGQ9Im0xODguMDUgNzA4LjE1aDEuNDMwNGMwLjM5NjIxIDAgMC43MTUxOSAwLjMxODk4IDAuNzE1MTkgMC43MTUxOXYxLjQzMDRjMCAwLjM5NjIyLTAuMzE4OTggMC43MTUxOS0wLjcxNTE5IDAuNzE1MTloLTEuNDMwNGMtMC4zOTYyMSAwLTAuNzE1MTktMC4zMTg5Ny0wLjcxNTE5LTAuNzE1MTl2LTEuNDMwNGMwLTAuMzk2MjEgMC4zMTg5OC0wLjcxNTE5IDAuNzE1MTktMC43MTUxOXoiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQ1NDQyKSIvPjxwYXRoIGQ9Im0yMTYuNjYgNzA4LjE1aDEuNDMwNGMwLjM5NjIxIDAgMC43MTUxOSAwLjMxODk4IDAuNzE1MTkgMC43MTUxOXYxLjQzMDRjMCAwLjM5NjIyLTAuMzE4OTggMC43MTUxOS0wLjcxNTE5IDAuNzE1MTloLTEuNDMwNGMtMC4zOTYyMiAwLTAuNzE1MTktMC4zMTg5Ny0wLjcxNTE5LTAuNzE1MTl2LTEuNDMwNGMwLTAuMzk2MjEgMC4zMTg5Ny0wLjcxNTE5IDAuNzE1MTktMC43MTUxOXoiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQ1NDU4KSIvPjxwYXRoIGQ9Im0yMDIuMzYgNzA4LjE1aDEuNDMwNGMwLjM5NjIxIDAgMC43MTUxOSAwLjMxODk4IDAuNzE1MTkgMC43MTUxOXYxLjQzMDRjMCAwLjM5NjIyLTAuMzE4OTggMC43MTUxOS0wLjcxNTE5IDAuNzE1MTloLTEuNDMwNGMtMC4zOTYyMSAwLTAuNzE1MTktMC4zMTg5Ny0wLjcxNTE5LTAuNzE1MTl2LTEuNDMwNGMwLTAuMzk2MjEgMC4zMTg5OC0wLjcxNTE5IDAuNzE1MTktMC43MTUxOXoiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQ1NDUwKSIvPjwvZz48L2c+PC9zdmc+Cg==);
}

.wysiwyg-macro[data-macro-name=warning] {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iLS41IC0uNSA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogPG1ldGFkYXRhPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoLjU2MTQgMCAwIC41NjE0IC0uNSAzLjI3NCkiPgogIDxpbWFnZSB4PSIyLjEyODdlLTciIHk9Ii4xNTI1NCIgd2lkdGg9IjExNCIgaGVpZ2h0PSIxMDAiIG9wYWNpdHk9Ii44IiB4bGluazpocmVmPSJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaUlITjBZVzVrWVd4dmJtVTlJbTV2SWo4K0Nqd2hMUzBnUTNKbFlYUmxaQ0IzYVhSb0lFbHVhM05qWVhCbElDaG9kSFJ3T2k4dmQzZDNMbWx1YTNOallYQmxMbTl5Wnk4cElDMHRQZ29LUEhOMlp3b2dJQ0I0Yld4dWN6cGtZejBpYUhSMGNEb3ZMM0IxY213dWIzSm5MMlJqTDJWc1pXMWxiblJ6THpFdU1TOGlDaUFnSUhodGJHNXpPbU5qUFNKb2RIUndPaTh2WTNKbFlYUnBkbVZqYjIxdGIyNXpMbTl5Wnk5dWN5TWlDaUFnSUhodGJHNXpPbkprWmowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzh3TWk4eU1pMXlaR1l0YzNsdWRHRjRMVzV6SXlJS0lDQWdlRzFzYm5NNmMzWm5QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlLSUNBZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWdvZ0lDQjRiV3h1Y3pwemIyUnBjRzlrYVQwaWFIUjBjRG92TDNOdlpHbHdiMlJwTG5OdmRYSmpaV1p2Y21kbExtNWxkQzlFVkVRdmMyOWthWEJ2WkdrdE1DNWtkR1FpQ2lBZ0lIaHRiRzV6T21sdWEzTmpZWEJsUFNKb2RIUndPaTh2ZDNkM0xtbHVhM05qWVhCbExtOXlaeTl1WVcxbGMzQmhZMlZ6TDJsdWEzTmpZWEJsSWdvZ0lDQjNhV1IwYUQwaU5qQXdMalF3TURBeUlnb2dJQ0JvWldsbmFIUTlJalV5TkM0NE16ZzVPU0lLSUNBZ2RtbGxkMEp2ZUQwaU1DQXdJRFl3TUM0ME1EQXdOQ0ExTWpRdU9ETTVNRFlpQ2lBZ0lHbGtQU0p6ZG1jeUlnb2dJQ0IyWlhKemFXOXVQU0l4TGpFaUNpQWdJR2x1YTNOallYQmxPblpsY25OcGIyNDlJakF1T1RFZ2NqRXpOekkxSWdvZ0lDQnpiMlJwY0c5a2FUcGtiMk51WVcxbFBTSXhNUzV6ZG1jaVBnb2dJRHh6YjJScGNHOWthVHB1WVcxbFpIWnBaWGNLSUNBZ0lDQnBaRDBpWW1GelpTSUtJQ0FnSUNCd1lXZGxZMjlzYjNJOUlpTm1abVptWm1ZaUNpQWdJQ0FnWW05eVpHVnlZMjlzYjNJOUlpTTJOalkyTmpZaUNpQWdJQ0FnWW05eVpHVnliM0JoWTJsMGVUMGlNUzR3SWdvZ0lDQWdJR2x1YTNOallYQmxPbkJoWjJWdmNHRmphWFI1UFNJd0xqQWlDaUFnSUNBZ2FXNXJjMk5oY0dVNmNHRm5aWE5vWVdSdmR6MGlNaUlLSUNBZ0lDQnBibXR6WTJGd1pUcDZiMjl0UFNJd0xqa3dOVEE1TmpZNElnb2dJQ0FnSUdsdWEzTmpZWEJsT21ONFBTSXhNVEF1TURRMU55SUtJQ0FnSUNCcGJtdHpZMkZ3WlRwamVUMGlNakU0TGpBME56QTVJZ29nSUNBZ0lHbHVhM05qWVhCbE9tUnZZM1Z0Wlc1MExYVnVhWFJ6UFNKd2VDSUtJQ0FnSUNCcGJtdHpZMkZ3WlRwamRYSnlaVzUwTFd4aGVXVnlQU0pzWVhsbGNqRWlDaUFnSUNBZ2MyaHZkMmR5YVdROUltWmhiSE5sSWdvZ0lDQWdJSE5vYjNkbmRXbGtaWE05SW1aaGJITmxJZ29nSUNBZ0lHbHVhM05qWVhCbE9uZHBibVJ2ZHkxM2FXUjBhRDBpTVRreU1DSUtJQ0FnSUNCcGJtdHpZMkZ3WlRwM2FXNWtiM2N0YUdWcFoyaDBQU0l4TURVM0lnb2dJQ0FnSUdsdWEzTmpZWEJsT25kcGJtUnZkeTE0UFNJdE9DSUtJQ0FnSUNCcGJtdHpZMkZ3WlRwM2FXNWtiM2N0ZVQwaUxUZ2lDaUFnSUNBZ2FXNXJjMk5oY0dVNmQybHVaRzkzTFcxaGVHbHRhWHBsWkQwaU1TSUtJQ0FnSUNCbWFYUXRiV0Z5WjJsdUxYUnZjRDBpTUNJS0lDQWdJQ0JtYVhRdGJXRnlaMmx1TFd4bFpuUTlJakFpQ2lBZ0lDQWdabWwwTFcxaGNtZHBiaTF5YVdkb2REMGlNQ0lLSUNBZ0lDQm1hWFF0YldGeVoybHVMV0p2ZEhSdmJUMGlNQ0lLSUNBZ0lDQjFibWwwY3owaWNIZ2lJQzgrQ2lBZ1BHUmxabk1LSUNBZ0lDQnBaRDBpWkdWbWN6UWlQZ29nSUNBZ1BHbHVhM05qWVhCbE9uQmxjbk53WldOMGFYWmxDaUFnSUNBZ0lDQnBaRDBpY0dWeWMzQmxZM1JwZG1VM09Ea3hJZ29nSUNBZ0lDQWdhVzVyYzJOaGNHVTZjR1Z5YzNBelpDMXZjbWxuYVc0OUlqTTNNaTR3TkRjeU55QTZJRE0xTUM0M09EYzBOU0E2SURFaUNpQWdJQ0FnSUNCcGJtdHpZMkZ3WlRwMmNGOTZQU0kzTkRRdU1EazBOVElnT2lBMU1qWXVNVGd4TVRnZ09pQXhJZ29nSUNBZ0lDQWdhVzVyYzJOaGNHVTZkbkJmZVQwaU1DQTZJREV3TURBdU1EQXdNU0E2SURBaUNpQWdJQ0FnSUNCcGJtdHpZMkZ3WlRwMmNGOTRQU0l3SURvZ05USTJMakU0TVRFNUlEb2dNU0lLSUNBZ0lDQWdJSE52Wkdsd2IyUnBPblI1Y0dVOUltbHVhM05qWVhCbE9uQmxjbk53TTJRaUlDOCtDaUFnUEM5a1pXWnpQZ29nSUR4dFpYUmhaR0YwWVFvZ0lDQWdJR2xrUFNKdFpYUmhaR0YwWVRjaVBnb2dJQ0FnUEhKa1pqcFNSRVkrQ2lBZ0lDQWdJRHhqWXpwWGIzSnJDaUFnSUNBZ0lDQWdJSEprWmpwaFltOTFkRDBpSWo0S0lDQWdJQ0FnSUNBOFpHTTZabTl5YldGMFBtbHRZV2RsTDNOMlp5dDRiV3c4TDJSak9tWnZjbTFoZEQ0S0lDQWdJQ0FnSUNBOFpHTTZkSGx3WlFvZ0lDQWdJQ0FnSUNBZ0lISmtaanB5WlhOdmRYSmpaVDBpYUhSMGNEb3ZMM0IxY213dWIzSm5MMlJqTDJSamJXbDBlWEJsTDFOMGFXeHNTVzFoWjJVaUlDOCtDaUFnSUNBZ0lDQWdQR1JqT25ScGRHeGxQand2WkdNNmRHbDBiR1UrQ2lBZ0lDQWdJRHd2WTJNNlYyOXlhejRLSUNBZ0lEd3ZjbVJtT2xKRVJqNEtJQ0E4TDIxbGRHRmtZWFJoUGdvZ0lEeG5DaUFnSUNBZ2FXUTlJbXhoZVdWeU1TSUtJQ0FnSUNCcGJtdHpZMkZ3WlRwbmNtOTFjRzF2WkdVOUlteGhlV1Z5SWdvZ0lDQWdJR2x1YTNOallYQmxPbXhoWW1Wc1BTSk1ZWGxsY2lBeElnb2dJQ0FnSUhSeVlXNXpabTl5YlQwaWRISmhibk5zWVhSbEtDMHhNRGt4TGpFMU15d3hNamMzTGpjd09UUXBJajRLSUNBZ0lEeHdZWFJvQ2lBZ0lDQWdJQ0JwYm10elkyRndaVHBqYjI1dVpXTjBiM0l0WTNWeWRtRjBkWEpsUFNJd0lnb2dJQ0FnSUNBZ2FXUTlJbkJoZEdnME1UVTRJZ29nSUNBZ0lDQWdaRDBpYlNBeE5qY3pMak0xTkRNc0xUYzNNUzR3TnpBek1TQXROVFkwTGpBd01qWXNMVEZsTFRRZ01qZ3lMakF3TVRVc0xUUTRPQzQwTkRBMk9TQjZJZ29nSUNBZ0lDQWdhVzVyYzJOaGNHVTZkSEpoYm5ObWIzSnRMV05sYm5SbGNpMTVQU0l0T0RFdU5EQTJOellpQ2lBZ0lDQWdJQ0JwYm10elkyRndaVHAwY21GdWMyWnZjbTB0WTJWdWRHVnlMWGc5SWkwd0xqQXdNREUwT1RBM056QTFJZ29nSUNBZ0lDQWdjM1I1YkdVOUltOXdZV05wZEhrNk1UdG1hV3hzT2lObE1qQmhNVFk3Wm1sc2JDMXZjR0ZqYVhSNU9qRTdjM1J5YjJ0bE9pTmxNakJoTVRZN2MzUnliMnRsTFhkcFpIUm9Pak0yTzNOMGNtOXJaUzFzYVc1bFkyRndPbUoxZEhRN2MzUnliMnRsTFd4cGJtVnFiMmx1T25KdmRXNWtPM04wY205clpTMXRhWFJsY214cGJXbDBPalE3YzNSeWIydGxMV1JoYzJoaGNuSmhlVHB1YjI1bE8zTjBjbTlyWlMxa1lYTm9iMlptYzJWME9qQTdjM1J5YjJ0bExXOXdZV05wZEhrNk1TSUtJQ0FnSUNBZ0lITnZaR2x3YjJScE9tNXZaR1YwZVhCbGN6MGlZMk5qWXlJZ0x6NEtJQ0FnSUR4d1lYUm9DaUFnSUNBZ0lDQnpkSGxzWlQwaWIzQmhZMmwwZVRveE8yWnBiR3c2STJabVptWm1aanRtYVd4c0xXOXdZV05wZEhrNk1UdHpkSEp2YTJVNmJtOXVaVHR6ZEhKdmEyVXRkMmxrZEdnNk16WTdjM1J5YjJ0bExXeHBibVZqWVhBNlluVjBkRHR6ZEhKdmEyVXRiR2x1WldwdmFXNDZjbTkxYm1RN2MzUnliMnRsTFcxcGRHVnliR2x0YVhRNk5EdHpkSEp2YTJVdFpHRnphR0Z5Y21GNU9tNXZibVU3YzNSeWIydGxMV1JoYzJodlptWnpaWFE2TUR0emRISnZhMlV0YjNCaFkybDBlVG94SWdvZ0lDQWdJQ0FnWkQwaWJTQXhNemt4TGpNMU16RXNMVEV4T1RFdU1URXhNeUF0TWpJeUxqYzJOVGNzTXpnMUxqZzBNRGs1SURRME5TNDFNekV4TERObExUUWdlaUlLSUNBZ0lDQWdJR2xrUFNKeVpXTjBPRE01TUNJS0lDQWdJQ0FnSUdsdWEzTmpZWEJsT21OdmJtNWxZM1J2Y2kxamRYSjJZWFIxY21VOUlqQWlDaUFnSUNBZ0lDQnpiMlJwY0c5a2FUcHViMlJsZEhsd1pYTTlJbU5qWTJNaUlDOCtDaUFnUEM5blBnbzhMM04yWno0SyIvPgogIDxwYXRoIGQ9Im0zNi41IDU4aDQwdjIwaC00MHoiIGZpbGw9Im5vbmUiLz4KICA8ZyBzdHlsZT0iZm9udC1mZWF0dXJlLXNldHRpbmdzOm5vcm1hbDtmb250LXZhcmlhbnQtY2Fwczpub3JtYWw7Zm9udC12YXJpYW50LWxpZ2F0dXJlczpub3JtYWw7Zm9udC12YXJpYW50LW51bWVyaWM6bm9ybWFsIiBhcmlhLWxhYmVsPSIhIj4KICAgPHBhdGggZD0ibTYxLjg4MiA0Ny43MDRxMCAxLjQ2ODgtMC4xNTYyNSAyLjg0MzgtMC4xNTYyNSAxLjM0MzgtMC40MDYyNSAzLjAzMTJsLTIuMTg3NSAxNS44NzVoLTMuMDMxMmwtMi4wMzEyLTE0LjY1NnEtMC4xNTYyNS0xLjA5MzgtMC4yODEyNS0yLjAzMTJ0LTAuMjUtMS43ODEyLTAuMTg3NS0xLjY1NjItMC4wNjI1LTEuNjg3NXEwLTMuNzE4OCAxLjEyNS01LjQzNzUgMS4xNTYyLTEuNzE4OCAzLjI1LTEuNzE4OCAxLjAzMTIgMCAxLjgxMjUgMC4zNzUgMC43ODEyNSAwLjM0Mzc1IDEuMzEyNSAxLjE4NzUgMC41NjI1IDAuODQzNzUgMC44MTI1IDIuMjUgMC4yODEyNSAxLjM3NSAwLjI4MTI1IDMuNDA2MnptMC42ODc1IDI5LjYyNXEwIDEuMDMxMi0wLjM3NSAxLjkzNzV0LTEuMDMxMiAxLjU2MjUtMS41NjI1IDEuMDYyNXEtMC44NzUgMC4zNzUtMS44NzUgMC4zNzUtMS4wMzEyIDAtMS45Mzc1LTAuMzc1LTAuOTA2MjUtMC40MDYyNS0xLjU2MjUtMS4wNjI1dC0xLjA2MjUtMS41NjI1cS0wLjM3NS0wLjkwNjI1LTAuMzc1LTEuOTM3NSAwLTEgMC4zNzUtMS44NzUgMC40MDYyNS0wLjkwNjI1IDEuMDYyNS0xLjU2MjV0MS41NjI1LTEuMDMxMiAxLjkzNzUtMC4zNzVxMSAwIDEuODc1IDAuMzc1IDAuOTA2MjUgMC4zNzUgMS41NjI1IDEuMDMxMnQxLjAzMTIgMS41NjI1cTAuMzc1IDAuODc1IDAuMzc1IDEuODc1eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==);
}

.wysiwyg-macro-body {
  background-color: #fff;
  border: 1px solid #ddd;
  margin: 0;
  padding: 10px
}

.wysiwyg-macro-body>p:first-child {
  margin-top: 0
}

.wysiwyg-macro-body>p:last-child {
  margin-bottom: 0
}

.wysiwyg-macro-body>pre {
  -moz-tab-size: 4;
  -ms-tab-size: 4;
  -webkit-tab-size: 4;
  tab-size: 4;
  margin: 0;
  white-space: pre-wrap
}

td .wysiwyg-macro-body {
  min-width: 200px
}

.confluence-embedded-image {
  cursor: default;
  max-width: calc(100% - 4px);
  margin-left: 2px;
  margin-right: 2px;
  vertical-align: text-bottom
}

.confluence-embedded-image[width],
.confluence-embedded-image[height] {
  max-width: none
}

table.wysiwyg-macro {
  border-collapse: separate
}

.wysiwyg-unknown-macro {
  vertical-align: text-bottom
}

p+table.wysiwyg-macro,
table.wysiwyg-macro+p {
  margin-top: 10px
}

.editor-inline-macro {
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  margin: 0 2px;
  min-height: 24px;
  vertical-align: text-bottom
}

.confluenceTh>.editor-inline-macro,
.confluenceTh>.wysiwyg-unknown-macro,
.confluenceTd>.editor-inline-macro,
.confluenceTd>.wysiwyg-unknown-macro {
  vertical-align: inherit
}

table.confluenceTable {
  margin-bottom: 0
}

img.confluence-embedded-image,
img.editor-inline-macro,
table.wysiwyg-macro {
  cursor: move
}
</style>
`

const htmlStyle = `
<style>
:root {
  --radius: 0.25em;
}

cnfl-status {
  background: #999999;
  color: white;
  padding: var(--radius);
  border-radius: var(--radius);
  font-weight: bold;
}
cnfl-status[color=Red] { background: #ff0000; }
cnfl-status[color=Yellow] { background: #ffcc00; color: black; }
cnfl-status[color=Green] { background: #33ff33; color: black;}
cnfl-status[color=Blue] { background: #00ccff }

cnfl-note {
  display: block;
  background: #fcfcfc;
  border: 1px solid#ccc;
  border-radius: 5px;
  color:#333;
  margin: 10px 0 1em 0;
  min-height: 20px;
  padding: 10px;
  position: relative;
}
cnfl-note[macro=note] {
  background: #fffdf6;
  border-color: #ffeaae;
}
cnfl-note[macro=note]:before { font-weight: bold; content: "\\26a0"; }
cnfl-note[macro=note][title]:before { font-weight: bold; content: "\\26a0" " " attr(title); }

cnfl-note[macro=warning] {
  background:#fff8f7;
  border-color:#d04437;
}
cnfl-note[macro=warning]:before { font-weight: bold; content: "\\26d4"; }
cnfl-note[macro=warning][title]:before { font-weight: bold; content: "\\26d4" " " attr(title); }

cnfl-note[macro=info] {}
cnfl-note[macro=info]:before { font-weight: bold; content: "\\1F6C8"; }
cnfl-note[macro=info][title]:before { font-weight: bold; content: "\\1F6C8" " " attr(title); }

</style>
`

function style (isHtml) {
  return isHtml
    ? htmlStyle
    : cnflStyle
}

module.exports = {
  style
}
