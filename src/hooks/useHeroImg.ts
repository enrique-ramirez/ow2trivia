import { useEffect, useState } from "react";

const useHeroImg = (name: string, type: "Role" | "Avatar") => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const [src, setSrc] = useState<string>();

  useEffect(() => {
    const dir = type === "Avatar" ? "heroes" : "roles";
    const ext = type === "Avatar" ? "png" : "svg";

    const fetchImage = async () => {
      try {
        const response = await import(
          `../assets/${dir}/${name.toLowerCase()}.${ext}`
        );
        setSrc(response.default);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [name, type]);

  return {
    loading,
    error,
    src,
  };
};

export { useHeroImg };
