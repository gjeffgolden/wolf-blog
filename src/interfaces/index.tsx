export interface Post {
    mainImage: {
        asset: {
            _id: string,
            url: string
        }
    },
    slug: {
        _type: string,
        current: string
    },
    title: string
    _createdAt: string
    categories: { title: string }[]
  }
