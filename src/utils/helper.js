export const generateRandomSentence = () =>
  Array.from({ length: Math.floor(Math.random() * 10) + 1 },
    () => Array.from({ length: Math.floor(Math.random() * 6) + 1 },
      () => String.fromCharCode(97 + Math.floor(Math.random() * 26))
    ).join('')
  ).join(' ').replace(/^\w/, (c) => c.toUpperCase()) + '.';

var nameList = [
    'Time','Past','Future','Dev',
    'Fly','Flying','Soar','Soaring','Power','Falling',
    'Fall','Jump','Cliff','Mountain','Rend','Red','Blue',
    'Green','Yellow','Gold','Demon','Demonic','Panda','Cat',
    'Fear','Light','Glow','Tread','Deep','Deeper','Deepest',
    'Mine','Your','Worst','Enemy','Hostile','Force','Video',
    'Game','Donkey','Mule','Colt','Cult','Cultist','Magnum',
    'Gun','Assault','Recon','Trap','Trapper','Redeem','Code',
    'Script','Writer','Near','Close','Open','Cube','Circle',
    'Sand','Desert','Dessert','Hurdle','Racer','Eraser','Erase','Big',
    'Small','Short','Tall','Sith','Bounty','Hunter','Cracked','Broken',
    'Sad','Happy','Joy','Joyful','Crimson','Destiny','Deceit','Lies',
    'Lie','Honest','Destined','Bloxxer','Hawk','Eagle','Hawker','Walker',
    'Zombie','Sarge','Capt','Captain','Punch','One','Two','Uno','Slice',
    'Slash','Melt','Melted','Melting','Fell','Wolf','Hound',
    'Legacy','Sharp','Dead','Mew','Chuckle','Bubba','Bubble','Sandwich','Smasher','Extreme','Multi','Universe','Ultimate','Death','Ready','Monkey','Elevator','Wrench','Grease','Head','Theme','Grand','Cool','Kid','Boy','Girl','Vortex','Paradox'
];

export const generateRandomName= () =>{
   return nameList[Math.floor( Math.random() * nameList.length )];
};

export function convertDurationToTime(duration) {
  const timeArray = duration.match(/\d+/g);
  return timeArray.map((unit, index) => (index === 0 ? unit + 'h ' : index === 1 ? unit + 'm ' : unit + 's')).join('').trim();
}

// export function formatViewCount(viewCount) {
//   const num = parseInt(viewCount, 10);
//   return isNaN(num) ? viewCount : num < 1e3 ? num : `${Math.floor(num / 1e3)}k`;
// }
export function formatViewCount(likes) {
  if (likes === undefined || likes === null) {
    return 'N/A';  // Or any default value you want to return for undefined likes
  } else if (likes >= 1000000) {
    const millions = likes / 1000000;
    return millions % 1 === 0 ? millions.toFixed(0) + 'M' : millions.toFixed(1) + 'M';
  } else if (likes >= 1000) {
    const thousands = likes / 1000;
    return thousands % 1 === 0 ? thousands.toFixed(0) + 'K' : thousands.toFixed(1) + 'K';
  } else {
    return likes.toString();
  }
}


export function numberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function timeAgo(timestamp) {
  const currentDate = new Date();
  const date = new Date(timestamp);

  const timeDifference = currentDate - date;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) {
    return `${years} ${years === 1 ? 'year' : 'years'} ago`;
  } else if (months > 0) {
    return `${months} ${months === 1 ? 'month' : 'months'} ago`;
  } else if (days > 0) {
    return `${days} ${days === 1 ? 'day' : 'days'} ago`;
  } else if (hours > 0) {
    return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
  } else if (minutes > 0) {
    return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
  } else {
    return 'Just now';
  }
}