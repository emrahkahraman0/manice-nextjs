'use client'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

function Page() {
  const pathname = usePathname()
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        id="page_banner"
      >
        <div className="text container">
          <h6>{pathname}</h6>
        </div>
        {/*text*/}
      </motion.div>
      {/*page_banner#*/}
    </>
  )
}

export default Page
