package com.zbm.test.jacoco.batch;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import org.junit.Rule;
import org.junit.Test;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.test.OutputCapture;

public class SampleBatchApplicationIT {

	@Rule
	public OutputCapture outputCapture = new OutputCapture();

	@Test
	public void testDefaultSettings() throws Exception {
		assertEquals(0, SpringApplication.exit(SpringApplication
				.run(SampleBatchApplication.class)));
		String output = this.outputCapture.toString();
		assertTrue("Wrong output: " + output,
				output.contains("completed with the following parameters"));
	}

}
