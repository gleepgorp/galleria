import Link from "next/link";

export default function HomePage() {
  const mockURLS = [
    "https://utfs.io/f/XWqGMo5TBKc2d7FQLfIYSfveCTNjdQt7Awk8lGZgphXVBmnE",
    "https://utfs.io/f/XWqGMo5TBKc2d7FQLfIYSfveCTNjdQt7Awk8lGZgphXVBmnE",
    "https://utfs.io/f/XWqGMo5TBKc2vfNttSFJEu52mVcfP49g7Yz1rGdwiWsnHSUo",
    "https://utfs.io/f/XWqGMo5TBKc2jEsI5Tteq0ZbskBl3FwuQrJhznAEm8DcL6gf",
    "https://utfs.io/f/XWqGMo5TBKc261OF9Jn7yaONS8bILrVW2xkpMgBw14AY5CUP"
  ];

  const mockImages = mockURLS.map((url, index) => ({
    id: index + 1,
    url,
  }));

  const mockImagesComponent = [...mockImages, ...mockImages, ...mockImages].map((image) => {
    return (
      <div key={image.id} className="">
        <img src={image.url} alt="image" className="max-w-40 max-w-40 h-40 w-40 object-cover"/>
      </div>
    )
  })

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImagesComponent}
      </div>
    </main>
  );
}
