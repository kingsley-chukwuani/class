class DescriptiveStatistics {
    static measuresOfCentralTendency = ['mean', 'median', 'mode'];
    static measuresOfDispersion = ['range', 'interquartile range', 'variance', 'standard deviation', 'mean absolute deviation'];
  
    // Calculate the mean
    static computeMean(data) {
      let sum = data.reduce((acc, val) => acc + val, 0);
      return sum / data.length;
    }
  
    // Calculate the median
    static computeMedian(data) {
      let sortedData = data.sort((a, b) => a - b);
      let mid = Math.floor(sortedData.length / 2);
      return sortedData.length % 2 !== 0 ? sortedData[mid] : (sortedData[mid - 1] + sortedData[mid]) / 2;
    }
  
    // Calculate the mode
    static computeMode(data) {
      let frequencyMap = new Map();
      data.forEach(val => {
        frequencyMap.set(val, (frequencyMap.get(val) || 0) + 1);
      });
      let maxFrequency = Math.max(...frequencyMap.values());
      return Array.from(frequencyMap.entries()).filter(([key, value]) => value === maxFrequency).map(([key]) => key);
    }
  
    // Calculate the range
    static computeRange(data) {
      let sortedData = data.sort((a, b) => a - b);
      return sortedData[sortedData.length - 1] - sortedData[0];
    }
  
    // Calculate the interquartile range
    static computeInterquartileRange(data) {
      let sortedData = data.sort((a, b) => a - b);
      let lowerQuartile = DescriptiveStatistics.computeMedian(sortedData.slice(0, Math.floor(sortedData.length / 2)));
      let upperQuartile = DescriptiveStatistics.computeMedian(sortedData.slice(Math.ceil(sortedData.length / 2)));
      return upperQuartile - lowerQuartile;
    }
  
  
  }
  
  // Example usage
  let data = [4, 7, 2, 9, 5, 7, 3, 8, 6, 7];
  console.log('Mean:', DescriptiveStatistics.computeMean(data));
  console.log('Median:', DescriptiveStatistics.computeMedian(data));
  console.log('Mode:', DescriptiveStatistics.computeMode(data));
  console.log('Range:', DescriptiveStatistics.computeRange(data));
  console.log('Interquartile Range:', DescriptiveStatistics.computeInterquartileRange(data));
  