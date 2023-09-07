import Image from 'next/image'
import  Link  from 'next/link'


export default function Home() {
  return (
    <main className="bg-gray-50">
      <div className="flex-1 p-3 sm:p-8 md:mt-14">
<div className ="mb-4 md:mb-8 w-full lg:max-w-5xl lg:grid lg:grid-cols-3 lg:gap-2">
<div className="md:max-w-2xl lg:col-span-2">
<div className="bg-white shadow">
<div className="px-4 py-2">
<h1 className="leading-8 mb-2">
Scion Asset Management, LLC
</h1>
<h2 className="text-2xl">
All 13F Portfolio Filings
</h2>
</div>
<div className="border-t border-gray-200">
<dl>
<div className="bg-gray-50 even:bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4">
<dt className="text-sm font-medium text-gray-500">
Most recent 13F
</dt>
<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
< Link className="link"   href="/13f/000090514823000689-scion-asset-management-llc-q2-2023" >Q2 2023</Link >
</dd>
</div>
<div className="bg-gray-50 even:bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4">
<dt className="text-sm font-medium text-gray-500">
Notable people
</dt>
<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
Michael Burry
</dd>
</div>
<div className="bg-gray-50 even:bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4">
<dt className="text-sm font-medium text-gray-500">
Location
</dt>
<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
Saratoga, CA
</dd>
</div>
<div className="bg-gray-50 even:bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4">
<dt className="text-sm font-medium text-gray-500">
CIK
</dt>
<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 ">
0001649339
</dd>
</div>
<div className="bg-gray-50 even:bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4">
<dt className="text-sm font-medium text-gray-500">
All SEC filings
</dt>
<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
< Link className="link"   target="_blank" href="https://www.sec.gov/cgi-bin/browse-edgar?CIK=0001649339">View on sec.gov</Link >
</dd>
</div>
</dl>
</div>
</div>
</div>
</div>
</div>

{/* another component */}
<div className="w-max max-w-full">
<table id="managerFilings" className="border shadow table-fixed">
<thead>
<tr>
<th className="px-3 py-2 bg-white text-sm font-medium text-gray-500 uppercase">Quarter</th>
<th className="px-3 py-2 bg-white text-sm font-medium text-gray-500 uppercase">Holdings</th>
<th className="px-3 py-2 bg-white text-sm font-medium text-gray-500 uppercase">Value ($000)</th>
<th className="px-3 py-2 bg-white text-sm font-medium text-gray-500 uppercase">Form Type</th>
<th className="px-3 py-2 bg-white text-sm font-medium text-gray-500 uppercase">Date Filed</th>
<th className="px-3 py-2 bg-white text-sm font-medium text-gray-500 uppercase">Filing ID</th>
<th className="px-3 py-2 bg-white text-sm font-medium text-gray-500 uppercase">Name</th>
</tr>
</thead>
<tbody className="font-mono">
<tr className="bg-gray-50 even:bg-white hover:bg-gray-200">
<td className="px-3 py-2 text-center" data-order="2023-06-30">
< Link className="link"   href="/13f/000090514823000689-scion-asset-management-llc-q2-2023">Q2 2023</Link >
</td>
<td className="px-3 py-2 text-right">33</td>
<td className="px-3 py-2 text-right">1,736,760</td>
<td className="px-3 py-2 text-center">13F-HR</td>
<td className="px-3 py-2 text-right" data-order="2023-08-14">8/14/2023</td>
<td className="px-3 py-2 text-center">000090514823000689</td>
<td className="px-3 py-2 truncate" title="Scion Asset Management, LLC">Scion Asset Management, LLC</td>
</tr>
<tr className="bg-gray-50 even:bg-white hover:bg-gray-200">
<td className="px-3 py-2 text-center" data-order="2023-03-31">
< Link className="link"   href="/13f/000090514823000408-scion-asset-management-llc-q1-2023">Q1 2023</Link >
</td>
<td className="px-3 py-2 text-right">21</td>
<td className="px-3 py-2 text-right">106,935</td>
<td className="px-3 py-2 text-center">13F-HR</td>
<td className="px-3 py-2 text-right" data-order="2023-05-15">5/15/2023</td>
<td className="px-3 py-2 text-center">000090514823000408</td>
<td className="px-3 py-2 truncate" title="Scion Asset Management, LLC">Scion Asset Management, LLC</td>
</tr>
<tr className="bg-gray-50 even:bg-white hover:bg-gray-200">
<td className="px-3 py-2 text-center" data-order="2022-12-31">
< Link className="link"   href="/13f/000090514823000213-scion-asset-management-llc-q4-2022">Q4 2022</Link >
</td>
<td className="px-3 py-2 text-right">9</td>
<td className="px-3 py-2 text-right">46,536</td>
<td className="px-3 py-2 text-center">13F-HR</td>
<td className="px-3 py-2 text-right" data-order="2023-02-14">2/14/2023</td>
<td className="px-3 py-2 text-center">000090514823000213</td>
<td className="px-3 py-2 truncate" title="Scion Asset Management, LLC">Scion Asset Management, LLC</td>
</tr>
<tr className="bg-gray-50 even:bg-white hover:bg-gray-200">
<td className="px-3 py-2 text-center" data-order="2022-09-30">
< Link className="link"   href="/13f/000156761922019784-scion-asset-management-llc-q3-2022">Q3 2022</Link >
</td>
<td className="px-3 py-2 text-right">6</td>
<td className="px-3 py-2 text-right">41,298</td>
<td className="px-3 py-2 text-center">13F-HR</td>
<td className="px-3 py-2 text-right" data-order="2022-11-14">11/14/2022</td>
<td className="px-3 py-2 text-center">000156761922019784</td>
<td className="px-3 py-2 truncate" title="Scion Asset Management, LLC">Scion Asset Management, LLC</td>
</tr>
<tr className="bg-gray-50 even:bg-white hover:bg-gray-200">
<td className="px-3 py-2 text-center" data-order="2022-06-30">
< Link className="link"   href="/13f/000156761922015999-scion-asset-management-llc-q2-2022">Q2 2022</Link >
</td>
<td className="px-3 py-2 text-right">1</td>
<td className="px-3 py-2 text-right">3,309</td>
<td className="px-3 py-2 text-center">13F-HR</td>
<td className="px-3 py-2 text-right" data-order="2022-08-15">8/15/2022</td>
<td className="px-3 py-2 text-center">000156761922015999</td>
<td className="px-3 py-2 truncate" title="Scion Asset Management, LLC">Scion Asset Management, LLC</td>
</tr>
<tr className="bg-gray-50 even:bg-white hover:bg-gray-200">
<td className="px-3 py-2 text-center" data-order="2022-03-31">
< Link className="link"   href="/13f/000156761922010747-scion-asset-management-llc-q1-2022">Q1 2022</Link >
</td>
<td className="px-3 py-2 text-right">12</td>
<td className="px-3 py-2 text-right">201,379</td>
<td className="px-3 py-2 text-center">13F-HR</td>
<td className="px-3 py-2 text-right" data-order="2022-05-16">5/16/2022</td>
<td className="px-3 py-2 text-center">000156761922010747</td>
<td className="px-3 py-2 truncate" title="Scion Asset Management, LLC">Scion Asset Management, LLC</td>
</tr>
<tr className="bg-gray-50 even:bg-white hover:bg-gray-200">
<td className="px-3 py-2 text-center" data-order="2021-12-31">
< Link className="link"   href="/13f/000156761922003986-scion-asset-management-llc-q4-2021">Q4 2021</Link >
</td>
<td className="px-3 py-2 text-right">6</td>
<td className="px-3 py-2 text-right">74,459</td>
<td className="px-3 py-2 text-center">13F-HR</td>
<td className="px-3 py-2 text-right" data-order="2022-02-14">2/14/2022</td>
<td className="px-3 py-2 text-center">000156761922003986</td>
<td className="px-3 py-2 truncate" title="Scion Asset Management, LLC">Scion Asset Management, LLC</td>
</tr>
<tr className="bg-gray-50 even:bg-white hover:bg-gray-200">
<td className="px-3 py-2 text-center" data-order="2021-09-30">
< Link className="link"   href="/13f/000156761921020215-scion-asset-management-llc-q3-2021">Q3 2021</Link >
</td>
<td className="px-3 py-2 text-right">6</td>
<td className="px-3 py-2 text-right">41,719</td>
<td className="px-3 py-2 text-center">13F-HR</td>
<td className="px-3 py-2 text-right" data-order="2021-11-15">11/15/2021</td>
<td className="px-3 py-2 text-center">000156761921020215</td>
<td className="px-3 py-2 truncate" title="Scion Asset Management, LLC">Scion Asset Management, LLC</td>
</tr>
<tr className="bg-gray-50 even:bg-white hover:bg-gray-200">
<td className="px-3 py-2 text-center" data-order="2021-06-30">
< Link className="link"  href="/13f/000156761921015632-scion-asset-management-llc-q2-2021">Q2 2021</Link >
</td>
<td className="px-3 py-2 text-right">22</td>
<td className="px-3 py-2 text-right">2,081,933</td>
<td className="px-3 py-2 text-center">13F-HR</td>
<td className="px-3 py-2 text-right" data-order="2021-08-16">8/16/2021</td>
<td className="px-3 py-2 text-center">000156761921015632</td>
<td className="px-3 py-2 truncate" title="Scion Asset Management, LLC">Scion Asset Management, LLC</td>
</tr>
<tr className="bg-gray-50 even:bg-white hover:bg-gray-200">
<td className="px-3 py-2 text-center" data-order="2021-03-31">
< Link className="link"   href="/13f/000156761921010281-scion-asset-management-llc-q1-2021">Q1 2021</Link >
</td>
<td className="px-3 py-2 text-right">31</td>
<td className="px-3 py-2 text-right">1,353,930</td>
<td className="px-3 py-2 text-center">13F-HR</td>
<td className="px-3 py-2 text-right" data-order="2021-05-17">5/17/2021</td>
<td className="px-3 py-2 text-center">000156761921010281</td>
<td className="px-3 py-2 truncate" title="Scion Asset Management, LLC">Scion Asset Management, LLC</td>
</tr>
<tr className="bg-gray-50 even:bg-white hover:bg-gray-200">
<td className="px-3 py-2 text-center" data-order="2020-12-31">
< Link className="link"   href="/13f/000156761921003819-scion-asset-management-llc-q4-2020">Q4 2020</Link >
</td>
<td className="px-3 py-2 text-right">23</td>
<td className="px-3 py-2 text-right">224,698</td>
<td className="px-3 py-2 text-center">13F-HR</td>
<td className="px-3 py-2 text-right" data-order="2021-02-16">2/16/2021</td>
<td className="px-3 py-2 text-center">000156761921003819</td>
<td className="px-3 py-2 truncate" title="Scion Asset Management, LLC">Scion Asset Management, LLC</td>
</tr>
<tr className="bg-gray-50 even:bg-white hover:bg-gray-200">
<td className="px-3 py-2 text-center" data-order="2020-09-30">
< Link className="link"   href="/13f/000156761920019679-scion-asset-management-llc-q3-2020">Q3 2020</Link >
</td>
<td className="px-3 py-2 text-right">33</td>
<td className="px-3 py-2 text-right">330,268</td>
<td className="px-3 py-2 text-center">13F-HR</td>
<td className="px-3 py-2 text-right" data-order="2020-11-16">11/16/2020</td>
<td className="px-3 py-2 text-center">000156761920019679</td>
<td className="px-3 py-2 truncate" title="Scion Asset Management, LLC">Scion Asset Management, LLC</td>
</tr>
<tr className="bg-gray-50 even:bg-white hover:bg-gray-200">
<td className="px-3 py-2 text-center" data-order="2020-06-30">
< Link className="link"   href="/13f/000156761920015233-scion-asset-management-llc-q2-2020">Q2 2020</Link >
</td>
<td className="px-3 py-2 text-right">29</td>
<td className="px-3 py-2 text-right">315,294</td>
<td className="px-3 py-2 text-center">13F-HR</td>
<td className="px-3 py-2 text-right" data-order="2020-08-14">8/14/2020</td>
<td className="px-3 py-2 text-center">000156761920015233</td>
<td className="px-3 py-2 truncate" title="Scion Asset Management, LLC">Scion Asset Management, LLC</td>
</tr>
<tr className="bg-gray-50 even:bg-white hover:bg-gray-200">
<td className="px-3 py-2 text-center" data-order="2020-03-31">
< Link className="link"   href="/13f/000156761920010271-scion-asset-management-llc-q1-2020">Q1 2020</Link >
</td>
<td className="px-3 py-2 text-right">14</td>
<td className="px-3 py-2 text-right">85,874</td>
<td className="px-3 py-2 text-center">13F-HR</td>
<td className="px-3 py-2 text-right" data-order="2020-05-15">5/15/2020</td>
<td className="px-3 py-2 text-center">000156761920010271</td>
<td className="px-3 py-2 truncate" title="Scion Asset Management, LLC">Scion Asset Management, LLC</td>
</tr>
<tr className="bg-gray-50 even:bg-white hover:bg-gray-200">
<td className="px-3 py-2 text-center" data-order="2019-12-31">
< Link className="link"   href="/13f/000156761920003530-scion-asset-management-llc-q4-2019">Q4 2019</Link >
</td>
<td className="px-3 py-2 text-right">9</td>
<td className="px-3 py-2 text-right">82,298</td>
<td className="px-3 py-2 text-center">13F-HR</td>
<td className="px-3 py-2 text-right" data-order="2020-02-14">2/14/2020</td>
<td className="px-3 py-2 text-center">000156761920003530</td>
<td className="px-3 py-2 truncate" title="Scion Asset Management, LLC">Scion Asset Management, LLC</td>
</tr>
<tr className="bg-gray-50 even:bg-white hover:bg-gray-200">
<td className="px-3 py-2 text-center" data-order="2019-09-30">
< Link className="link"   href="/13f/000156761919021303-scion-asset-management-llc-q3-2019">Q3 2019</Link >
</td>
<td className="px-3 py-2 text-right">7</td>
<td className="px-3 py-2 text-right">59,618</td>
<td className="px-3 py-2 text-center">13F-HR</td>
<td className="px-3 py-2 text-right" data-order="2019-11-14">11/14/2019</td>
<td className="px-3 py-2 text-center">000156761919021303</td>
<td className="px-3 py-2 truncate" title="Scion Asset Management, LLC">Scion Asset Management, LLC</td>
</tr>
<tr className="bg-gray-50 even:bg-white hover:bg-gray-200">
<td className="px-3 py-2 text-center" data-order="2019-06-30">
< Link className="link"   href="/13f/000156761919016689-scion-asset-management-llc-q2-2019">Q2 2019</Link >
</td>
<td className="px-3 py-2 text-right">10</td>
<td className="px-3 py-2 text-right">93,561</td>
<td className="px-3 py-2 text-center">13F-HR</td>
<td className="px-3 py-2 text-right" data-order="2019-08-14">8/14/2019</td>
<td className="px-3 py-2 text-center">000156761919016689</td>
<td className="px-3 py-2 truncate" title="Scion Asset Management, LLC">Scion Asset Management, LLC</td>
</tr>
<tr className="bg-gray-50 even:bg-white hover:bg-gray-200">
<td className="px-3 py-2 text-center" data-order="2019-03-31">
< Link className="link"   href="/13f/000156761919010955-scion-asset-management-llc-q1-2019">Q1 2019</Link >
</td>
<td className="px-3 py-2 text-right">14</td>
<td className="px-3 py-2 text-right">98,181</td>
<td className="px-3 py-2 text-center">13F-HR</td>
<td className="px-3 py-2 text-right" data-order="2019-05-15">5/15/2019</td>
<td className="px-3 py-2 text-center">000156761919010955</td>
<td className="px-3 py-2 truncate" title="Scion Asset Management, LLC">Scion Asset Management, LLC</td>
</tr>
<tr className="bg-gray-50 even:bg-white hover:bg-gray-200">
<td className="px-3 py-2 text-center" data-order="2018-12-31">
< Link className="link"   href="/13f/000156761919004198-scion-asset-management-llc-q4-2018">Q4 2018</Link >
</td>
<td className="px-3 py-2 text-right">16</td>
<td className="px-3 py-2 text-right">103,528</td>
<td className="px-3 py-2 text-center">13F-HR</td>
<td className="px-3 py-2 text-right" data-order="2019-02-14">2/14/2019</td>
<td className="px-3 py-2 text-center">000156761919004198</td>
<td className="px-3 py-2 truncate" title="Scion Asset Management, LLC">Scion Asset Management, LLC</td>
</tr>
<tr className="bg-gray-50 even:bg-white hover:bg-gray-200">
<td className="px-3 py-2 text-center" data-order="2016-09-30">
< Link className="link"   href="/13f/000114036116086026-scion-asset-management-llc-q3-2016">Q3 2016</Link >
</td>
<td className="px-3 py-2 text-right">4</td>
<td className="px-3 py-2 text-right">35,387</td>
<td className="px-3 py-2 text-center">13F-HR</td>
<td className="px-3 py-2 text-right" data-order="2016-11-14">11/14/2016</td>
<td className="px-3 py-2 text-center">000114036116086026</td>
<td className="px-3 py-2 truncate" title="Scion Asset Management, LLC">Scion Asset Management, LLC</td>
</tr>
<tr className="bg-gray-50 even:bg-white hover:bg-gray-200">
<td className="px-3 py-2 text-center" data-order="2016-06-30">
< Link className="link"   href="/13f/000114036116076357-scion-asset-management-llc-q2-2016">Q2 2016</Link >
</td>
<td className="px-3 py-2 text-right">6</td>
<td className="px-3 py-2 text-right">45,502</td>
<td className="px-3 py-2 text-center">13F-HR</td>
<td className="px-3 py-2 text-right" data-order="2016-08-15">8/15/2016</td>
<td className="px-3 py-2 text-center">000114036116076357</td>
<td className="px-3 py-2 truncate" title="Scion Asset Management, LLC">Scion Asset Management, LLC</td>
</tr>
<tr className="bg-gray-50 even:bg-white hover:bg-gray-200">
<td className="px-3 py-2 text-center" data-order="2016-03-31">
< Link className="link"   href="/13f/000114036116065328-scion-asset-management-llc-q1-2016">Q1 2016</Link >
</td>
<td className="px-3 py-2 text-right">8</td>
<td className="px-3 py-2 text-right">51,092</td>
<td className="px-3 py-2 text-center">13F-HR</td>
<td className="px-3 py-2 text-right" data-order="2016-05-16">5/16/2016</td>
<td className="px-3 py-2 text-center">000114036116065328</td>
<td className="px-3 py-2 truncate" title="Scion Asset Management, LLC">Scion Asset Management, LLC</td>
</tr>
<tr className="bg-gray-50 even:bg-white hover:bg-gray-200">
<td className="px-3 py-2 text-center" data-order="2015-12-31">
< Link className="link"   href="/13f/000114036116052634-scion-asset-management-llc-q4-2015">Q4 2015</Link >
</td>
<td className="px-3 py-2 text-right">14</td>
<td className="px-3 py-2 text-right">79,939</td>
<td className="px-3 py-2 text-center">13F-HR</td>
<td className="px-3 py-2 text-right" data-order="2016-02-16">2/16/2016</td>
<td className="px-3 py-2 text-center">000114036116052634</td>
<td className="px-3 py-2 truncate" title="Scion Asset Management, LLC">Scion Asset Management, LLC</td>
</tr>
</tbody>
</table>
</div>

    
    </main>
  )
}
