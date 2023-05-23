import React, {useEffect, useState} from 'react';

const useCampaign = () => {
  const [data, setData] = useState<any>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        'http://protobake.com/protobak_star2/feed_data.json',
      );
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    let isMount = true;
    fetchData();
    return () => {
      isMount = false;
      setIsRefreshing(false);
    };
  }, [isRefreshing]);
  return {
    data,
    isLoading,
    setIsRefreshing,
    isRefreshing,
  };
};

export default useCampaign;
