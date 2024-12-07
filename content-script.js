const header = document.getElementById("header")
const prebreadcrumb = document.getElementsByClassName("prebreadcrumb")[0]
const breadcrumb = document.querySelector(".breadcrumb")
const alert = document.getElementsByClassName("alert")[0]
const wacthing_player = document.querySelector('.watching')

if(header) {
    header.style.marginBottom = 0
}
if(breadcrumb) {
    // breadcrumb.style.display = 'none'
    const prebreadcrumbStyles = {
        margin: 0,
        marginTop: '5px',
        marginBottom: '5px',
        backgroundColor: '#000',
        borderRadius: '4px',
        padding: '2px'
    }
    Object.assign(prebreadcrumb.style, prebreadcrumbStyles);

    const breadcrumbStyles = {
        paddingLeft: '8px',
        paddingRight: '8px',
        paddingTop: '4px',
        paddingBottom: '4px',

        margin: 0
    }
    Object.assign(breadcrumb.style, breadcrumbStyles);
}
if(alert) {
    alert.style.display = 'none'
}
// if(wacthing_player) {
//     wacthing_player.style.height = '150px'
// }

const vidCloud = document.querySelector('a[title="Server Vidcloud"]')
if (vidCloud) {
    vidCloud.click()
}