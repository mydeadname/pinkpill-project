/* style.css - 4chan /lgbt/ board style (Yotsuba B inspired) */
body {
    background-color: #ffe;
    color: #800000;
    font-family: 'MS PGothic', 'ＭＳ Ｐゴシック', arial, helvetica, sans-serif;
    font-size: 13px;
    margin: 8px;
}
a, a:visited {
    color: #0000ee;
    text-decoration: underline;
}
a:hover {
    color: #dd0000;
}
hr {
    border: 1px solid #d7bfaf;
    background-color: #f0d8c8;
    color: #f0d8c8;
    clear: both;
}
.desktop {
    display: block;
}
.mobile {
    display: none;
}
/* Board navigation */
#boardNavDesktop, #boardNavDesktopFoot {
    background-color: #f0e0d0;
    padding: 4px;
    margin-bottom: 8px;
    font-size: 12px;
}
.boardList a, .custom-menu-ctrl a, #navtopright a, #navbotright a {
    margin: 0 2px;
}
/* Banner */
.boardBanner {
    margin-bottom: 8px;
}
.boardTitle {
    font-size: 24px;
    font-weight: bold;
    color: #af0a0f;
    letter-spacing: 1px;
}
/* Post form */
.postForm {
    background-color: #f0e0d0;
    border: 1px solid #d7bfaf;
    padding: 8px;
    width: auto;
    margin-bottom: 8px;
}
.postForm td {
    padding: 2px 4px;
}
.rules ul {
    margin: 4px 0;
    padding-left: 20px;
    color: #333;
}
/* Threads */
.thread {
    margin-bottom: 16px;
    clear: both;
}
.postContainer {
    margin: 4px 0;
    overflow: hidden;
}
.opContainer .post {
    background-color: #f0e0d6;
    border: 1px solid #d7bfaf;
    padding: 4px;
}
.replyContainer {
    margin-left: 30px;
}
.replyContainer .post {
    background-color: #f5f5f5;
    border: 1px solid #b7b7b7;
    padding: 4px;
}
.sideArrows {
    float: left;
    font-size: 18px;
    font-weight: bold;
    color: #b86c6c;
    margin-right: 6px;
}
.postInfo {
    font-size: 12px;
    color: #333;
    margin-bottom: 4px;
}
.postInfo input[type="checkbox"] {
    vertical-align: middle;
}
.nameBlock {
    font-weight: bold;
    color: #117743;
}
.postertrip {
    color: #333;
    font-weight: normal;
}
.dateTime {
    color: #666;
}
.postNum a {
    color: #0000ee;
    text-decoration: none;
}
.postNum a:hover {
    text-decoration: underline;
}
.replylink {
    font-weight: bold;
}
.backlink {
    display: inline;
    margin-left: 8px;
}
.backlink a {
    color: #0000ee;
    text-decoration: none;
}
.backlink a:hover {
    text-decoration: underline;
}
/* File */
.file {
    margin: 4px 0;
}
.fileText {
    font-size: 12px;
}
.fileThumb {
    display: inline-block;
    border: 1px solid #aaa;
    padding: 2px;
    background: #fff;
}
.fileThumb img {
    border: none;
    display: block;
}
/* Post message */
blockquote.postMessage {
    margin: 8px 0 4px 0;
    padding-left: 8px;
    border-left: 2px solid #b7b7b7;
    color: #000;
    font-size: 13px;
}
.quotelink {
    text-decoration: none;
}
.deadlink {
    color: #a9a9a9;
    text-decoration: line-through;
}
/* Summary */
.summary {
    margin-left: 30px;
    font-size: 12px;
    color: #333;
}
/* Bottom controls */
.bottomCtrl {
    background-color: #f0e0d0;
    border: 1px solid #d7bfaf;
    padding: 8px;
    margin: 8px 0;
}
.pagelist {
    margin: 8px 0;
    font-size: 12px;
}
.pagelist .pages {
    display: inline;
}
.pagelist a {
    margin: 0 2px;
}
/* Footer */
#absbot {
    margin-top: 16px;
    font-size: 11px;
    color: #666;
    text-align: center;
}
#footer-links a {
    margin: 0 4px;
}
