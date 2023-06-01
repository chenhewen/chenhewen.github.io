function changePrivacyLanguage(locationValue) {
    let newURL = ""
    switch(locationValue) {
        case "zh-CN":
            newURL = "../zh-cn/privacy.html"
            break

        case "zh-TW":
            newURL = "../zh-tw/privacy.html"
            break

        case "en":
            newURL = "../en/privacy.html"
            break

        default:
            newURL = "../zh-cn/privacy.html"
    }

    location.href = newURL
}

function changeRenewalLanguage(locationValue) {
    let newURL = ""
    switch(locationValue) {
        case "zh-CN":
            newURL = "../zh-cn/auto-renewal.html"
            break

        case "zh-TW":
            newURL = "../zh-tw/auto-renewal.html"
            break

        case "en":
            newURL = "../en/auto-renewal.html"
            break

        default:
            newURL = "../zh-cn/auto-renewal.html"
    }

    location.href = newURL
}

function changeTermsLanguage(locationValue) {
    let newURL = ""
    switch(locationValue) {
        case "zh-CN":
            newURL = "../zh-cn/terms.html"
            break

        case "zh-TW":
            newURL = "../zh-tw/terms.html"
            break

        case "en":
            newURL = "../en/terms.html"
            break

        default:
            newURL = "../zh-cn/terms.html"
    }

    location.href = newURL
}