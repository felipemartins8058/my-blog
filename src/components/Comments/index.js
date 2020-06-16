import React from "react"
import * as S from "./styled"
import PropTypes from "prop-types"
import ReactDisqusComments from "react-disqus-comments"

const Comments = ({ url, title }) => {
  const completeURL = `http://felipe__bluex.com/${url}`

  return (
    <S.CommentsWrapper>
      <S.CommentsTitle>Comentários</S.CommentsTitle>
      <ReactDisqusComments
        shortname="FelipeMartins"
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </S.CommentsWrapper>
  )
}

Comments.protoType = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Comments
