import { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export const sanityClient = createClient({
  projectId: "mbtsebsy",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
})

// Initialize the image URL builder
export const builder = imageUrlBuilder(sanityClient)

// Helper function to generate image URLs
export function urlFor(source: string) {
  return builder.image(source)
}
