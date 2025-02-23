const header = document.getElementById("header")
const prebreadcrumb = document.getElementsByClassName("prebreadcrumb")[0]
const breadcrumb = document.querySelector(".breadcrumb")
const alert = document.getElementsByClassName("alert")[0]
const wacthing_player = document.querySelector('.watching')

if (header) {
    header.style.marginBottom = 0
}
if (breadcrumb) {
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
if (alert) {
    alert.style.display = 'none'
}
// if(wacthing_player) {
//     wacthing_player.style.height = '150px'
// }

const vidCloud = document.querySelector('a[title="Server Vidcloud"]')

document.addEventListener('DOMContentLoaded', () => {
    console.log("Content script injected!");

    const episodesBtns = document.querySelectorAll('.eps-item')
    const selectedEpisode = document.querySelector('.eps-item.active')
    selectedEpisode.style.border = '5px solid red'

    episodesBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            alert('episode changed!')
            // Get the breadcrumb element
            const breadcrumbElement = document.querySelector('.breadcrumb-item.active');
            if (!breadcrumbElement) {
                console.error('Breadcrumb element not found!');
                return; // Exit if the breadcrumb element is not found
            }

            // Get the current title in the breadcrumb
            const breadcrumbText = breadcrumbElement.textContent;
            const title = breadcrumbText.includes(':') ? breadcrumbText.split(':')[1].trim() : null; // Extract title after ':'
            if (!title) {
                console.error('No title found in breadcrumb text!');
                return; // Exit if there's no title to replace
            }

            // Get the selected episode title
            const episodeTitle = selectedEpisode?.textContent.split(': ')[1]; // Ensure `selectedEpisode` is valid
            if (!episodeTitle) {
                console.error('Selected episode title not found!');
                return; // Exit if there's no selected episode title
            }

            // Replace the breadcrumb title with the selected episode title
            breadcrumbElement.textContent = breadcrumbText.replace(title, episodeTitle);
        });
    });
})