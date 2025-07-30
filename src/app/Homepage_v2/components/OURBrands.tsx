"use client"

export default function LogoAnimation() {
  // Sample logo data - replace with your actual PNG logos
  const logos = [
    { id: 1, name: "Dum Safar", src: "/placeholder.svg?height=60&width=120&text=Dum+Safar" },
    { id: 2, name: "UBQ", src: "/placeholder.svg?height=60&width=120&text=UBQ" },
    { id: 3, name: "Nom", src: "/placeholder.svg?height=60&width=120&text=nom" },
    { id: 4, name: "Toscano", src: "/placeholder.svg?height=60&width=120&text=TOSCANO" },
    { id: 5, name: "Barbeque Nation", src: "/placeholder.svg?height=60&width=120&text=BARBEQUE+NATION" },
    { id: 6, name: "Brand 6", src: "/placeholder.svg?height=60&width=120&text=Brand+6" },
    { id: 7, name: "Brand 7", src: "/placeholder.svg?height=60&width=120&text=Brand+7" },
    { id: 8, name: "Brand 8", src: "/placeholder.svg?height=60&width=120&text=Brand+8" },
  ]

  // Split logos into two columns
  const column1Logos = logos.slice(0, Math.ceil(logos.length / 2))
  const column2Logos = logos.slice(Math.ceil(logos.length / 2))

  const LogoCard = ({ logo }: { logo: (typeof logos)[0] }) => (
    <div className="bg-darkcream rounded-[34px] md:rounded-[53.48px] p-6 h-[149px] md:h-[180px] lg:h-[230px] w-[132px] md:w-[95%] lg:w-[203px] flex-shrink-0 flex justify-center items-center">
      <img src={logo.src || "/placeholder.svg"} alt={logo.name} className="max-w-full max-h-16 object-contain" />
    </div>
  )

  return (
    <div className="flex gap-2 md:gap-0 overflow-hidden max-w-[420px]">
      {/* Column 1 - Moving Up */}
      <div className="flex-1 relative overflow-hidden ">
        <div className="scroll-up-smooth flex flex-col gap-2 ">
          {/* Triple the content for ultra-smooth infinite scroll */}
          {[...Array(3)].map((_, setIndex) => (
            <div key={setIndex} className="flex flex-col gap-2 ">
              {column1Logos.map((logo, index) => (
                <LogoCard key={`${setIndex}-${index}`} logo={logo}   />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Column 2 - Moving Down */}
      <div className="flex-1 relative overflow-hidden">
        <div className="scroll-down-smooth flex flex-col gap-2">
          {/* Triple the content for ultra-smooth infinite scroll */}
          {[...Array(3)].map((_, setIndex) => (
            <div key={setIndex} className="flex flex-col gap-2 items-end">
              {column2Logos.map((logo, index) => (
                <LogoCard key={`${setIndex}-${index}`} logo={logo} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
