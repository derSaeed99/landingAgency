export type CaTiers = {
    title: string
    price?: string
    subHeader: string
    description: string
    contactType: string
}

export type CaContact = {
    name: string
    email: string
    message: string
    website?: boolean
    seo?: boolean
    webApp?: boolean
    mvp?: boolean
}
