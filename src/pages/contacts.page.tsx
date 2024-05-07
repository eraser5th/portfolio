import { FC } from "react"
import { Page } from "../components/Page"

const ContactPage: FC = () => {
  return (
    <Page>
      <h1>Contacts</h1>
      <ul>
        <li>
          <a href="https://github.com/eraser5th">GitHub</a>
        </li>
        <li>
          <a href="https://twitter.com/eraser5th">X(元Twitter)</a>
        </li>
      </ul>
    </Page>
  )
}

export default ContactPage
