/**
 * Do a external redirection
 * @param {string} target URL target
 * */
export const redirection = (target) => {
    window.open(target, "_blank")
}

/**
 * Do a internal redirection
 * @param {string} target URL target
 * */
export const redirectionHREF = (target) => {
    window.location.href = target
}

/**
 * Change document title dynamically
 * @param {string} title The category
 * @return {void}
 * */
export const changeTitle = (title) => {
    document.title = `ZODWorks - ${title}`
}