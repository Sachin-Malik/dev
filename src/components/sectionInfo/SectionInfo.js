function SectionInfo({ data }) {
    return (
        <div className='row justify-content-center mt-5 mb-md-4'>
            <div className='col-11'>
                <h2 className='section-info-header'><span>{data.sectionInfoHeader}</span></h2>
                <h5 className='section-info-content'>{data.sectionInfoContent}</h5>
            </div>
        </div>
    )
}

export default SectionInfo;