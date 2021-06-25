import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: "g3h498fi",
    dataset: "production",
    useCdn: true,
});