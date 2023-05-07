"use strict";

var helpers = require("../../helpers/helpers");

exports["Europe/Simferopol"] = {

	"guess:by:offset" : helpers.makeTestGuess("Europe/Simferopol", { offset: true, expect: "Europe/Moscow" }),

	"guess:by:abbr" : helpers.makeTestGuess("Europe/Simferopol", { abbr: true, expect: "Europe/Moscow" }),

	"1879" : helpers.makeTestYear("Europe/Simferopol", [
		["1879-12-31T21:43:35+00:00", "23:59:59", "LMT", -8184 / 60],
		["1879-12-31T21:43:36+00:00", "23:59:36", "SMT", -136]
	]),

	"1924" : helpers.makeTestYear("Europe/Simferopol", [
		["1924-05-01T21:43:59+00:00", "23:59:59", "SMT", -136],
		["1924-05-01T21:44:00+00:00", "23:44:00", "EET", -120]
	]),

	"1930" : helpers.makeTestYear("Europe/Simferopol", [
		["1930-06-20T21:59:59+00:00", "23:59:59", "EET", -120],
		["1930-06-20T22:00:00+00:00", "01:00:00", "MSK", -180]
	]),

	"1941" : helpers.makeTestYear("Europe/Simferopol", [
		["1941-10-31T20:59:59+00:00", "23:59:59", "MSK", -180],
		["1941-10-31T21:00:00+00:00", "23:00:00", "CEST", -120]
	]),

	"1942" : helpers.makeTestYear("Europe/Simferopol", [
		["1942-11-02T00:59:59+00:00", "02:59:59", "CEST", -120],
		["1942-11-02T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"1943" : helpers.makeTestYear("Europe/Simferopol", [
		["1943-03-29T00:59:59+00:00", "01:59:59", "CET", -60],
		["1943-03-29T01:00:00+00:00", "03:00:00", "CEST", -120],
		["1943-10-04T00:59:59+00:00", "02:59:59", "CEST", -120],
		["1943-10-04T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"1944" : helpers.makeTestYear("Europe/Simferopol", [
		["1944-04-03T00:59:59+00:00", "01:59:59", "CET", -60],
		["1944-04-03T01:00:00+00:00", "03:00:00", "CEST", -120],
		["1944-04-12T21:59:59+00:00", "23:59:59", "CEST", -120],
		["1944-04-12T22:00:00+00:00", "01:00:00", "MSK", -180]
	]),

	"1981" : helpers.makeTestYear("Europe/Simferopol", [
		["1981-03-31T20:59:59+00:00", "23:59:59", "MSK", -180],
		["1981-03-31T21:00:00+00:00", "01:00:00", "MSD", -240],
		["1981-09-30T19:59:59+00:00", "23:59:59", "MSD", -240],
		["1981-09-30T20:00:00+00:00", "23:00:00", "MSK", -180]
	]),

	"1982" : helpers.makeTestYear("Europe/Simferopol", [
		["1982-03-31T20:59:59+00:00", "23:59:59", "MSK", -180],
		["1982-03-31T21:00:00+00:00", "01:00:00", "MSD", -240],
		["1982-09-30T19:59:59+00:00", "23:59:59", "MSD", -240],
		["1982-09-30T20:00:00+00:00", "23:00:00", "MSK", -180]
	]),

	"1983" : helpers.makeTestYear("Europe/Simferopol", [
		["1983-03-31T20:59:59+00:00", "23:59:59", "MSK", -180],
		["1983-03-31T21:00:00+00:00", "01:00:00", "MSD", -240],
		["1983-09-30T19:59:59+00:00", "23:59:59", "MSD", -240],
		["1983-09-30T20:00:00+00:00", "23:00:00", "MSK", -180]
	]),

	"1984" : helpers.makeTestYear("Europe/Simferopol", [
		["1984-03-31T20:59:59+00:00", "23:59:59", "MSK", -180],
		["1984-03-31T21:00:00+00:00", "01:00:00", "MSD", -240],
		["1984-09-29T22:59:59+00:00", "02:59:59", "MSD", -240],
		["1984-09-29T23:00:00+00:00", "02:00:00", "MSK", -180]
	]),

	"1985" : helpers.makeTestYear("Europe/Simferopol", [
		["1985-03-30T22:59:59+00:00", "01:59:59", "MSK", -180],
		["1985-03-30T23:00:00+00:00", "03:00:00", "MSD", -240],
		["1985-09-28T22:59:59+00:00", "02:59:59", "MSD", -240],
		["1985-09-28T23:00:00+00:00", "02:00:00", "MSK", -180]
	]),

	"1986" : helpers.makeTestYear("Europe/Simferopol", [
		["1986-03-29T22:59:59+00:00", "01:59:59", "MSK", -180],
		["1986-03-29T23:00:00+00:00", "03:00:00", "MSD", -240],
		["1986-09-27T22:59:59+00:00", "02:59:59", "MSD", -240],
		["1986-09-27T23:00:00+00:00", "02:00:00", "MSK", -180]
	]),

	"1987" : helpers.makeTestYear("Europe/Simferopol", [
		["1987-03-28T22:59:59+00:00", "01:59:59", "MSK", -180],
		["1987-03-28T23:00:00+00:00", "03:00:00", "MSD", -240],
		["1987-09-26T22:59:59+00:00", "02:59:59", "MSD", -240],
		["1987-09-26T23:00:00+00:00", "02:00:00", "MSK", -180]
	]),

	"1988" : helpers.makeTestYear("Europe/Simferopol", [
		["1988-03-26T22:59:59+00:00", "01:59:59", "MSK", -180],
		["1988-03-26T23:00:00+00:00", "03:00:00", "MSD", -240],
		["1988-09-24T22:59:59+00:00", "02:59:59", "MSD", -240],
		["1988-09-24T23:00:00+00:00", "02:00:00", "MSK", -180]
	]),

	"1989" : helpers.makeTestYear("Europe/Simferopol", [
		["1989-03-25T22:59:59+00:00", "01:59:59", "MSK", -180],
		["1989-03-25T23:00:00+00:00", "03:00:00", "MSD", -240],
		["1989-09-23T22:59:59+00:00", "02:59:59", "MSD", -240],
		["1989-09-23T23:00:00+00:00", "02:00:00", "MSK", -180]
	]),

	"1990" : helpers.makeTestYear("Europe/Simferopol", [
		["1990-06-30T22:59:59+00:00", "01:59:59", "MSK", -180],
		["1990-06-30T23:00:00+00:00", "01:00:00", "EET", -120]
	]),

	"1992" : helpers.makeTestYear("Europe/Simferopol", [
		["1992-03-28T23:59:59+00:00", "01:59:59", "EET", -120],
		["1992-03-29T00:00:00+00:00", "03:00:00", "EEST", -180],
		["1992-09-26T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1992-09-27T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1993" : helpers.makeTestYear("Europe/Simferopol", [
		["1993-03-27T23:59:59+00:00", "01:59:59", "EET", -120],
		["1993-03-28T00:00:00+00:00", "03:00:00", "EEST", -180],
		["1993-09-25T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1993-09-26T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1994" : helpers.makeTestYear("Europe/Simferopol", [
		["1994-03-26T23:59:59+00:00", "01:59:59", "EET", -120],
		["1994-03-27T00:00:00+00:00", "03:00:00", "EEST", -180],
		["1994-04-30T20:59:59+00:00", "23:59:59", "EEST", -180],
		["1994-04-30T21:00:00+00:00", "01:00:00", "MSD", -240],
		["1994-09-24T22:59:59+00:00", "02:59:59", "MSD", -240],
		["1994-09-24T23:00:00+00:00", "02:00:00", "MSK", -180]
	]),

	"1995" : helpers.makeTestYear("Europe/Simferopol", [
		["1995-03-25T22:59:59+00:00", "01:59:59", "MSK", -180],
		["1995-03-25T23:00:00+00:00", "03:00:00", "MSD", -240],
		["1995-09-23T22:59:59+00:00", "02:59:59", "MSD", -240],
		["1995-09-23T23:00:00+00:00", "02:00:00", "MSK", -180]
	]),

	"1996" : helpers.makeTestYear("Europe/Simferopol", [
		["1996-03-30T20:59:59+00:00", "23:59:59", "MSK", -180],
		["1996-03-30T21:00:00+00:00", "01:00:00", "MSD", -240],
		["1996-10-26T23:59:59+00:00", "03:59:59", "MSD", -240],
		["1996-10-27T00:00:00+00:00", "03:00:00", "MSK", -180]
	]),

	"1997" : helpers.makeTestYear("Europe/Simferopol", [
		["1997-03-30T00:59:59+00:00", "03:59:59", "MSK", -180],
		["1997-03-30T01:00:00+00:00", "04:00:00", "EEST", -180],
		["1997-10-26T00:59:59+00:00", "03:59:59", "EEST", -180],
		["1997-10-26T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"1998" : helpers.makeTestYear("Europe/Simferopol", [
		["1998-03-29T00:59:59+00:00", "02:59:59", "EET", -120],
		["1998-03-29T01:00:00+00:00", "04:00:00", "EEST", -180],
		["1998-10-25T00:59:59+00:00", "03:59:59", "EEST", -180],
		["1998-10-25T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"1999" : helpers.makeTestYear("Europe/Simferopol", [
		["1999-03-28T00:59:59+00:00", "02:59:59", "EET", -120],
		["1999-03-28T01:00:00+00:00", "04:00:00", "EEST", -180],
		["1999-10-31T00:59:59+00:00", "03:59:59", "EEST", -180],
		["1999-10-31T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2000" : helpers.makeTestYear("Europe/Simferopol", [
		["2000-03-26T00:59:59+00:00", "02:59:59", "EET", -120],
		["2000-03-26T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2000-10-29T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2000-10-29T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2001" : helpers.makeTestYear("Europe/Simferopol", [
		["2001-03-25T00:59:59+00:00", "02:59:59", "EET", -120],
		["2001-03-25T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2001-10-28T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2001-10-28T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2002" : helpers.makeTestYear("Europe/Simferopol", [
		["2002-03-31T00:59:59+00:00", "02:59:59", "EET", -120],
		["2002-03-31T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2002-10-27T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2002-10-27T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2003" : helpers.makeTestYear("Europe/Simferopol", [
		["2003-03-30T00:59:59+00:00", "02:59:59", "EET", -120],
		["2003-03-30T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2003-10-26T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2003-10-26T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2004" : helpers.makeTestYear("Europe/Simferopol", [
		["2004-03-28T00:59:59+00:00", "02:59:59", "EET", -120],
		["2004-03-28T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2004-10-31T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2004-10-31T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2005" : helpers.makeTestYear("Europe/Simferopol", [
		["2005-03-27T00:59:59+00:00", "02:59:59", "EET", -120],
		["2005-03-27T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2005-10-30T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2005-10-30T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2006" : helpers.makeTestYear("Europe/Simferopol", [
		["2006-03-26T00:59:59+00:00", "02:59:59", "EET", -120],
		["2006-03-26T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2006-10-29T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2006-10-29T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2007" : helpers.makeTestYear("Europe/Simferopol", [
		["2007-03-25T00:59:59+00:00", "02:59:59", "EET", -120],
		["2007-03-25T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2007-10-28T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2007-10-28T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2008" : helpers.makeTestYear("Europe/Simferopol", [
		["2008-03-30T00:59:59+00:00", "02:59:59", "EET", -120],
		["2008-03-30T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2008-10-26T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2008-10-26T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2009" : helpers.makeTestYear("Europe/Simferopol", [
		["2009-03-29T00:59:59+00:00", "02:59:59", "EET", -120],
		["2009-03-29T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2009-10-25T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2009-10-25T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2010" : helpers.makeTestYear("Europe/Simferopol", [
		["2010-03-28T00:59:59+00:00", "02:59:59", "EET", -120],
		["2010-03-28T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2010-10-31T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2010-10-31T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2011" : helpers.makeTestYear("Europe/Simferopol", [
		["2011-03-27T00:59:59+00:00", "02:59:59", "EET", -120],
		["2011-03-27T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2011-10-30T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2011-10-30T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2012" : helpers.makeTestYear("Europe/Simferopol", [
		["2012-03-25T00:59:59+00:00", "02:59:59", "EET", -120],
		["2012-03-25T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2012-10-28T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2012-10-28T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2013" : helpers.makeTestYear("Europe/Simferopol", [
		["2013-03-31T00:59:59+00:00", "02:59:59", "EET", -120],
		["2013-03-31T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2013-10-27T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2013-10-27T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2014" : helpers.makeTestYear("Europe/Simferopol", [
		["2014-03-29T23:59:59+00:00", "01:59:59", "EET", -120],
		["2014-03-30T00:00:00+00:00", "04:00:00", "MSK", -240],
		["2014-10-25T21:59:59+00:00", "01:59:59", "MSK", -240],
		["2014-10-25T22:00:00+00:00", "01:00:00", "MSK", -180]
	])
};