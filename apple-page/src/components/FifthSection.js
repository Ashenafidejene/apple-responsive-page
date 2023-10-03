import AppleTvIcon from './images/icons/apple-tv-logo.png'
import banker from './images/home/banker.png'
import watch from './images/icons/watch-series5-logo.png'
import Section from './js/Section'
import Section2 from './js/Section2'
const FifthSection = () => {
    return (
		<section className="fifth-heghlight-wrapper">
			<div className="container-fluid">
				<div className="row">
					<div className="left-side-wrapper col-sm-12 col-md-6">
						<div className="left-side-container">
							<div className="top-logo-wrapper">
								<div className="logo-wrapper">
									<img src={AppleTvIcon}/>
								</div>
							</div>
							<div className="tvshow-logo-wraper">
								<img src={banker}/>
							</div>
							<div className="watch-more-wrapper">
								<a href="#">Watch now on the Apple TV App</a>
							</div>
						</div>
					</div>
					<Section2 OuterCon="right-side-wrapper" InnerCon="right-side-container" Logo={watch} description="With the Always-On Retina display." description2="You’ve never seen a watch like this." link="Learn more" link2="Buy"  />
				</div>
			</div> 
		</section>
	  )
}

export default FifthSection
