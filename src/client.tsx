import sanityClient from "@sanity/client"

export default sanityClient({
  projectId: "g3h498fi",
  apiVersion: "2021-08-04",
  dataset: "production",
  useCdn: true
})
