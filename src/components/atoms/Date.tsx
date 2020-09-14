import { useMemo } from 'react'
import { parseISO, format } from 'date-fns'

interface Props {
  value: string
}

const DateComponent: React.FC<Props> = ({ value }) => {
  const date = useMemo(() => parseISO(value), [value])
  return <time dateTime={value}>{format(date, 'yyyy/MM/dd')}</time>
}

export default DateComponent
