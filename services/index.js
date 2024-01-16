import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getGalleryItems = async () => {
  const query = gql`
    query GetGalleryItems {
      images {
        photo {
          url
        }
      }
      videos {
        videos {
          url
        }
      }
    }
  `;

  try {
    const result = await request(graphqlAPI, query);
    return {
      images: result.images.map((img) => img.photo), // Assuming each 'image' has a 'photo' object
      videos: result.videos.map((vid) => vid.videos), // Assuming each 'video' has a 'videos' object
    };
  } catch (error) {
    console.error("Failed to fetch gallery items:", error);
    return { images: [], videos: [] };
  }
};
