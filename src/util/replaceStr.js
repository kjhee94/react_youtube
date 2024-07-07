export function replaceStr(str) {
    
    str = str.replaceAll("<br>", "\n");
    str = str.replaceAll("&gt;", ">");
    str = str.replaceAll("&lt;", "<");
    str = str.replaceAll("&quot;", "\"");
    str = str.replaceAll("&nbsp;", " ");
    str = str.replaceAll("&amp;", "&");
    str = str.replaceAll("&#39;", "'");
    
    return str;
}