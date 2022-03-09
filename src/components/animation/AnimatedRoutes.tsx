import { Box } from '@mui/system'
import { AnimatePresence, motion } from 'framer-motion'
import { FC } from 'react'
import { Routes, useLocation } from 'react-router-dom'

type RoutesProps = {
  exitBeforeEnter?: boolean
  initial?: boolean
}

export const AnimatedRoutes: FC<RoutesProps> = ({
  children,
  exitBeforeEnter = true,
  initial = false,
}) => {
  const location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter={exitBeforeEnter} initial={initial}>
        <Routes location={location} key={location.key}>
          {children}
        </Routes>
    </AnimatePresence>
  )
}
