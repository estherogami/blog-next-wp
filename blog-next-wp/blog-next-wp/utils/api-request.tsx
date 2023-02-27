import { Post } from "@/components/post-list/types";

export type PostsResponse = {
    posts: Post[];
    totalPages: number;
  };

  
/**
 * Obtiene una lista de publicaciones y el número total de páginas de la API de WordPress.
 * @param page La página de resultados que se desea obtener. El valor predeterminado es 1.
 * @returns Un objeto que contiene la lista de publicaciones y el número total de páginas.
 */
export async function getPosts(page:number = 1): Promise<PostsResponse> {
    // Hacer una solicitud a la API de WordPress con el número de página especificado
    const res = await fetch(process.env.WP_URI+`posts?_fields=id,date,excerpt,title,slug,thumbnailUrl&page=${page}`);
    
    // Extraer la lista de publicaciones de la respuesta de la API
    const posts: Post[] = await res.json();
  
    // Extraer el número total de páginas de la cabecera X-WP-TotalPages de la respuesta de la API
    const totalPages = Number(res.headers.get('X-WP-TotalPages'));
  
    // Devolver un objeto que contiene la lista de publicaciones y el número total de páginas
    return { posts: posts, totalPages: totalPages };
  }