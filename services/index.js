import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_SECONDARY_ENDPOINT;
const ITEMS_PER_PAGE = 100; // Adjust this number based on the server's maximum limit

export const getGalleryItems = async () => {
  const query = gql`
    query GetGalleryItems($first: Int) {
      images(first: $first) {
        photo {
          url
        }
      }
      videos(first: $first) {
        videos {
          url
        }
      }
    }
  `;

  try {
    const result = await request(graphqlAPI, query, { first: ITEMS_PER_PAGE });
    return {
      images: result.images.map((img) => img.photo), // Assuming each 'image' has a 'photo' object
      videos: result.videos.map((vid) => vid.videos), // Assuming each 'video' has a 'video' object
    };
  } catch (error) {
    console.error("Failed to fetch gallery items:", error);
    return { images: [], videos: [] };
  }
};
