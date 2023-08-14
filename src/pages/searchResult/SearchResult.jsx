import React,{useState, useEffect} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useParams } from 'react-router-dom'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import { fetchDataFromApi } from '../../utils/api'
import './style.scss'
import noResult from '../../assets/no-results.png'

const SearchResult = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const { query } = useParams();
  
  return (
    <div>
      SearchResult
    </div>
  )
}

export default SearchResult
