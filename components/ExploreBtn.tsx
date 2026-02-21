'use client';
import posthog from 'posthog-js';

const ExploreBtn = () => {
  return (
    <button id="explore-btn" type="button" className="mt-7 mx-auto" onClick={() => {
      console.log("clicked explore events");
      posthog.capture('explore_events_clicked');
    }}>
        <a href="#events">
            Explore Events
            <img src="/icons/arrow-down.svg" alt="" width={24} height={24}/>
        </a>

    </button>
  )
}

export default ExploreBtn
