import Image from "next/image"

export default function SocialComparison() {
  return (
    <div className="flex flex-col items-center justify-center max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Value of</h1>

      <div className="w-full max-w-xl mb-6">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mbGv2GKx9bKUZGGQVzPav8zvagY5SK.png"
          alt="1 LinkedIn Follower"
          width={900}
          height={150}
          className="w-full h-auto"
          priority
        />
      </div>

      <h2 className="text-4xl md:text-5xl font-bold my-6 text-center">equals</h2>

      <div className="w-full max-w-xl">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-66Ofe9s2Z54yUf6rxWnlQ0PRyoVmVU.png"
          alt="100+ Instagram Followers"
          width={900}
          height={150}
          className="w-full h-auto"
        />
      </div>
    </div>
  )
}
