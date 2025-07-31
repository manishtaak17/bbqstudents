"use client"

import { useEffect, useState, useRef } from "react"

const brands = [
  {
    name: "SAI",
    logo: "/images/saltbrand.png",
  },
  {
    name: "nom nomm",
    logo: "/images/nombrand.png",
  },
  {
    name: "UBQ",
    logo: "/images/ubqbrand.png",
  },
  {
    name: "BARBEQUE NATION",
    logo: "/images/barbequenation.png",
  },
  {
    name: "dumsafar",
    logo: "/images/dumsafarbrand.png",
  },
  {
    name: "TOSCANO",
    logo: "/images/toscanobrandpizzeria1.png",
  },
]

export default function BrandShowcase() {
  const [shouldSlide, setShouldSlide] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const itemRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkIfShouldSlide = () => {
      if (containerRef.current && itemRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        const itemWidth = itemRef.current.offsetWidth
        const gap = 20
        const totalItemWidth = itemWidth + gap
        const itemsPerRow = Math.floor(containerWidth / totalItemWidth)

        // If we can't fit all items in one row, enable slider
        setShouldSlide(itemsPerRow < brands.length)
      }
    }

    // Add a small delay to ensure proper measurement
    setTimeout(checkIfShouldSlide, 100)
    window.addEventListener("resize", checkIfShouldSlide)

    return () => window.removeEventListener("resize", checkIfShouldSlide)
  }, [])

  // Triple the brands for seamless infinite scroll
  const extendedBrands = [...brands, ...brands, ...brands]

  if (shouldSlide) {
    return (
      <div className="w-full overflow-hidden">
        <div className="relative">
          <div
            className="flex animate-slide-fast gap-5"
            style={{
              width: `${extendedBrands.length * 192}px`, // 172px item + 20px gap
            }}
          >
            {extendedBrands.map((brand, index) => (
              <div key={index} className="flex-shrink-0 relative">
                <div className="flex flex-col items-center justify-center w-[125px] h-[125px]">
                  <img src={brand.logo || "/placeholder.svg"} alt={brand.name} className=" object-contain w-auto h-auto max-w-[95px]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full ">
      <div className="max-w-[1160px] mx-auto px-5" ref={containerRef}>
        <div className="flex flex-nowrap justify-between items-center gap-5">
          {brands.map((brand, index) => (
            <div key={index} className="relative" ref={index === 0 ? itemRef : null}>
              <div className="flex flex-col items-center justify-center w-[172px] h-[172px]">
                <img src={brand.logo || "/placeholder.svg"} alt={brand.name} className=" object-contain w-auto h-auto max-w-[120px]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
