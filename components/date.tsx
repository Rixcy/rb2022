import { DateTime } from 'luxon'
import { ComponentProps } from 'react'

type DateProps = {
  /**
   * The date to format.
   * @example "2020-01-30"
   **/
  date: string
} & ComponentProps<'time'>

export const Date = (props: DateProps) => {
  const { date, ...restProps } = props
  const parsedDate = DateTime.fromISO(date)

  return (
    <time dateTime={parsedDate.toISO()} {...restProps}>
      {parsedDate.toLocaleString()}
    </time>
  )
}
