import { GetStaticPropsResult } from "next"

export type MyGetStaticProps<
  // eslint-disable-next-line
  PARAMS extends Record<string, any>,
  // eslint-disable-next-line
  PROPS extends Record<string, any>
> = (arg: { params: PARAMS }) => Promise<GetStaticPropsResult<PROPS>>
