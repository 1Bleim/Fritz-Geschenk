async function loadMarkdown(file, targetId) {
    const response = await fetch(file);
    const markdown = await response.text();
    const html = marked.parse(markdown);
    document.getElementById(targetId).innerHTML = html;
}
