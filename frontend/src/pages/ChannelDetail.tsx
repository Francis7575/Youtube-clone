import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchApi } from '../utils/fetchApi'
import { Videos, ChannelCard } from '../components'
import { searchData } from '../types/types'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState<searchData | null>(null)
  const [videos, setVideos] = useState<searchData[]>([]);
  const { id } = useParams()

  useEffect(() => {
    fetchApi(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0] || null));

    fetchApi(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items || []));
  }, [id]);

  const subscriberCount = channelDetail?.statistics?.subscriberCount;

  return (
    <div>
      <div style={{
          background: 'linear-gradient(90deg, #4add81, #43b2b9, #3c88ee)',
          zIndex: 10,
          height: '300px'
        }} />
      {channelDetail && (
        <div className="flex flex-col items-center">
          <ChannelCard channelDetail={channelDetail} marginTop="-110px" maxWidth="170px" />
          {subscriberCount && (
            <p className="mt-2 text-second-darkblue-opc-70 text-[.9rem] md:text-[1rem]">
              {parseInt(subscriberCount).toLocaleString()} subscribers
            </p>
          )}
        </div>
      )}
      <div className='px-[2rem] lg:px-[5rem] mt-[4rem]'>
        <Videos videos={videos} className='grid-cols-dynamic'/>
      </div>
    </div>
  )
}

export default ChannelDetail