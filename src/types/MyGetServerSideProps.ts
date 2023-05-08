export type MyGetServerSideProps<T> = () =>
  | {
      props: T
    }
  | Promise<{
      props: T
    }>
