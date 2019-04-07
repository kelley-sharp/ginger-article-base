const example = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <link href="http://arxiv.org/api/query?search_query%3D%28%28cat%3Astat.ML%20OR%20cat%3Acs.SI%20OR%20cat%3Acs.LG%20OR%20cat%3A9-bio.NC%20OR%20cat%3Astat.AP%20OR%20cat%3Acs.CV%20OR%20cat%3Aphysics.bio-ph%20OR%20cat%3Astat.ME%20OR%20cat%3Acs.AI%29%20AND%20%28abs%3Apsychiatry%20OR%20abs%3Apsychotherapy%20OR%20abs%3Amental%20health%20OR%20abs%3Amental%20illness%20OR%20abs%3Apsychology%29%29%26id_list%3D%26start%3D0%26max_results%3D10" rel="self" type="application/atom+xml"/>
  <title type="html">ArXiv Query: search_query=((cat:stat.ML OR cat:cs.SI OR cat:cs.LG OR cat:9-bio.NC OR cat:stat.AP OR cat:cs.CV OR cat:physics.bio-ph OR cat:stat.ME OR cat:cs.AI) AND (abs:psychiatry OR abs:psychotherapy OR abs:mental health OR abs:mental illness OR abs:psychology))&amp;id_list=&amp;start=0&amp;max_results=10</title>
  <id>http://arxiv.org/api/rFkdGhAh+A/L+To1zsjuuFWCT8Q</id>
  <updated>2019-04-06T00:00:00-04:00</updated>
  <opensearch:totalResults xmlns:opensearch="http://a9.com/-/spec/opensearch/1.1/">2877</opensearch:totalResults>
  <opensearch:startIndex xmlns:opensearch="http://a9.com/-/spec/opensearch/1.1/">0</opensearch:startIndex>
  <opensearch:itemsPerPage xmlns:opensearch="http://a9.com/-/spec/opensearch/1.1/">10</opensearch:itemsPerPage>
  <entry>
    <id>http://arxiv.org/abs/1904.02670v1</id>
    <updated>2019-04-04T17:08:16Z</updated>
    <published>2019-04-04T17:08:16Z</published>
    <title>What Twitter Profile and Posted Images Reveal About Depression and
  Anxiety</title>
    <summary>  Previous work has found strong links between the choice of social media
images and users' emotions, demographics and personality traits. In this study,
we examine which attributes of profile and posted images are associated with
depression and anxiety of Twitter users. We used a sample of 28,749 Facebook
users to build a language prediction model of survey-reported depression and
anxiety, and validated it on Twitter on a sample of 887 users who had taken
anxiety and depression surveys. We then applied it to a different set of 4,132
Twitter users to impute language-based depression and anxiety labels, and
extracted interpretable features of posted and profile pictures to uncover the
associations with users' depression and anxiety, controlling for demographics.
For depression, we find that profile pictures suppress positive emotions rather
than display more negative emotions, likely because of social media
self-presentation biases. They also tend to show the single face of the user
(rather than show her in groups of friends), marking increased focus on the
self, emblematic for depression. Posted images are dominated by grayscale and
low aesthetic cohesion across a variety of image features. Profile images of
anxious users are similarly marked by grayscale and low aesthetic cohesion, but
less so than those of depressed users. Finally, we show that image features can
be used to predict depression and anxiety, and that multitask learning that
includes a joint modeling of demographics improves prediction performance.
Overall, we find that the image attributes that mark depression and anxiety
offer a rich lens into these conditions largely congruent with the
psychological literature, and that images on Twitter allow inferences about the
mental health status of users.
</summary>
    <author>
      <name>Sharath Chandra Guntuku</name>
    </author>
    <author>
      <name>Daniel Preotiuc-Pietro</name>
    </author>
    <author>
      <name>Johannes C. Eichstaedt</name>
    </author>
    <author>
      <name>Lyle H. Ungar</name>
    </author>
    <arxiv:comment xmlns:arxiv="http://arxiv.org/schemas/atom">ICWSM 2019</arxiv:comment>
    <link href="http://arxiv.org/abs/1904.02670v1" rel="alternate" type="text/html"/>
    <link title="pdf" href="http://arxiv.org/pdf/1904.02670v1" rel="related" type="application/pdf"/>
    <arxiv:primary_category xmlns:arxiv="http://arxiv.org/schemas/atom" term="cs.HC" scheme="http://arxiv.org/schemas/atom"/>
    <category term="cs.HC" scheme="http://arxiv.org/schemas/atom"/>
    <category term="cs.SI" scheme="http://arxiv.org/schemas/atom"/>
  </entry>
  <entry>
    <id>http://arxiv.org/abs/1904.02566v1</id>
    <updated>2019-04-04T14:12:10Z</updated>
    <published>2019-04-04T14:12:10Z</published>
    <title>Noise-Level Estimation from Single Color Image Using Correlations
  Between Textures in RGB Channels</title>
    <summary>  We propose a simple method for estimating noise level from a single color
image. In most image-denoising algorithms, an accurate noise-level estimate
results in good denoising performance; however, it is difficult to estimate
noise level from a single image because it is an ill-posed problem. We tackle
this problem by using prior knowledge that textures are highly correlated
between RGB channels and noise is uncorrelated to other signals. We also
extended our method for RAW images because they are available in almost all
digital cameras and often used in practical situations. Experiments show the
high noise-estimation performance of our method in synthetic noisy images. We
also applied our method to natural images including RAW images and achieved
better noise-estimation performance than conventional methods.
</summary>
    <author>
      <name>Akihiro Nakamura</name>
    </author>
    <author>
      <name>Michihiro Kobayashi</name>
    </author>
    <arxiv:comment xmlns:arxiv="http://arxiv.org/schemas/atom">9 pages, 11 figures</arxiv:comment>
    <link href="http://arxiv.org/abs/1904.02566v1" rel="alternate" type="text/html"/>
    <link title="pdf" href="http://arxiv.org/pdf/1904.02566v1" rel="related" type="application/pdf"/>
    <arxiv:primary_category xmlns:arxiv="http://arxiv.org/schemas/atom" term="cs.CV" scheme="http://arxiv.org/schemas/atom"/>
    <category term="cs.CV" scheme="http://arxiv.org/schemas/atom"/>
  </entry>
  <entry>
    <id>http://arxiv.org/abs/1904.02243v1</id>
    <updated>2019-04-03T21:24:38Z</updated>
    <published>2019-04-03T21:24:38Z</published>
    <title>Optimized Preprocessing and Machine Learning for Quantitative Raman
  Spectroscopy in Biology</title>
    <summary>  Raman spectroscopy's capability to provide meaningful composition predictions
is heavily reliant on a pre-processing step to remove insignificant spectral
variation. This is crucial in biofluid analysis. Widespread adoption of
diagnostics using Raman requires a robust model which can withstand routine
spectra discrepancies due to unavoidable variations such as age, diet, and
medical background. A wealth of pre-processing methods are available, and it is
often up to trial-and-error or user experience to select the method which gives
the best results. This process can be incredibly time consuming and
inconsistent for multiple operators.
  In this study we detail a method to analyze the statistical variability
within a set of training spectra and determine suitability to form a robust
model. This allows us to selectively qualify or exclude a pre-processing
method, predetermine robustness, and simultaneously identify the number of
components which will form the best predictive model. We demonstrate the
ability of this technique to improve predictive models of two artificial
biological fluids.
  Raman spectroscopy is ideal for noninvasive, nondestructive analysis. Routine
health monitoring which maximizes comfort is increasingly crucial, particularly
in epidemic-level diabetes diagnoses. High variability in spectra of biological
samples can hinder Raman's adoption for these methods. Our technique allows the
decision of optimal pre-treatment method to be determined for the operator;
model performance is no longer a function of user experience. We foresee this
statistical technique being an instrumental element to widening the adoption of
Raman as a monitoring tool in a field of biofluid analysis.
</summary>
    <author>
      <name>Emily E Storey</name>
    </author>
    <author>
      <name>Amr S. Helmy</name>
    </author>
    <link href="http://arxiv.org/abs/1904.02243v1" rel="alternate" type="text/html"/>
    <link title="pdf" href="http://arxiv.org/pdf/1904.02243v1" rel="related" type="application/pdf"/>
    <arxiv:primary_category xmlns:arxiv="http://arxiv.org/schemas/atom" term="eess.SP" scheme="http://arxiv.org/schemas/atom"/>
    <category term="eess.SP" scheme="http://arxiv.org/schemas/atom"/>
    <category term="cs.LG" scheme="http://arxiv.org/schemas/atom"/>
    <category term="q-bio.QM" scheme="http://arxiv.org/schemas/atom"/>
    <category term="stat.ML" scheme="http://arxiv.org/schemas/atom"/>
  </entry>
  <entry>
    <id>http://arxiv.org/abs/1904.02098v1</id>
    <updated>2019-04-03T16:49:32Z</updated>
    <published>2019-04-03T16:49:32Z</published>
    <title>The Medical Deconfounder: Assessing Treatment Effect with Electronic
  Health Records (EHRs)</title>
    <summary>  Causal estimation of treatment effect has an important role in guiding
physicians' decision process for drug prescription. While treatment effect is
classically assessed with randomized controlled trials (RCTs), the availability
of electronic health records (EHRs) bring an unprecedented opportunity for more
efficient estimation. However, the presence of unobserved confounders makes
treatment effect assessment from EHRs a challenging task. Confounders are the
variables that affect both drug prescription and the patient's outcome;
examples include a patient's gender, race, social economic status and
comorbidities. When these confounders are unobserved, they bias the estimation.
To adjust for unobserved confounders, we develop the medical deconfounder, a
machine learning algorithm that unbiasedly estimates treatment effect from
EHRs. The medical deconfounder first constructs a substitute confounder by
modeling which drugs were prescribed to each patient; this substitute
confounder is guaranteed to capture all multi-drug confounders, observed or
unobserved (Wang and Blei, 2018). It then uses this substitute confounder to
adjust for the confounding bias in the analysis. We validate the medical
deconfounder on simulations and two medical data sets. The medical deconfounder
produces closer-to-truth estimates in simulations and identifies effective
medications that are more consistent with the findings reported in the medical
literature compared to classical approaches.
</summary>
    <author>
      <name>Linying Zhang</name>
    </author>
    <author>
      <name>Yixin Wang</name>
    </author>
    <author>
      <name>Anna Ostropolets</name>
    </author>
    <author>
      <name>Jami J. Mulgrave</name>
    </author>
    <author>
      <name>David M. Blei</name>
    </author>
    <author>
      <name>George Hripcsak</name>
    </author>
    <link href="http://arxiv.org/abs/1904.02098v1" rel="alternate" type="text/html"/>
    <link title="pdf" href="http://arxiv.org/pdf/1904.02098v1" rel="related" type="application/pdf"/>
    <arxiv:primary_category xmlns:arxiv="http://arxiv.org/schemas/atom" term="stat.ML" scheme="http://arxiv.org/schemas/atom"/>
    <category term="stat.ML" scheme="http://arxiv.org/schemas/atom"/>
    <category term="cs.LG" scheme="http://arxiv.org/schemas/atom"/>
  </entry>
  <entry>
    <id>http://arxiv.org/abs/1904.02062v1</id>
    <updated>2019-04-03T15:31:41Z</updated>
    <published>2019-04-03T15:31:41Z</published>
    <title>An Ensemble Deep Learning Model for Drug Abuse Detection in Sparse
  Twitter-Sphere</title>
    <summary>  As the problem of drug abuse intensifies in the U.S., many studies that
primarily utilize social media data, such as postings on Twitter, to study drug
abuse-related activities use machine learning as a powerful tool for text
classification and filtering. However, given the wide range of topics of
Twitter users, tweets related to drug abuse are rare in most of the datasets.
This imbalanced data remains a major issue in building effective tweet
classifiers, and is especially obvious for studies that include abuse-related
slang terms. In this study, we approach this problem by designing an ensemble
deep learning model that leverages both word-level and character-level features
to classify abuse-related tweets. Experiments are reported on a Twitter
dataset, where we can configure the percentages of the two classes (abuse vs.
non abuse) to simulate the data imbalance with different amplitudes. Results
show that our ensemble deep learning models exhibit better performance than
ensembles of traditional machine learning models, especially on heavily
imbalanced datasets.
</summary>
    <author>
      <name>Han Hu</name>
    </author>
    <author>
      <name>NhatHai Phan</name>
    </author>
    <author>
      <name>James Geller</name>
    </author>
    <author>
      <name>Stephen Iezzi</name>
    </author>
    <author>
      <name>Huy Vo</name>
    </author>
    <author>
      <name>Dejing Dou</name>
    </author>
    <author>
      <name>Soon Ae Chun</name>
    </author>
    <arxiv:comment xmlns:arxiv="http://arxiv.org/schemas/atom">The 17th World Congress of Medical and Health Informatics [MedInfo
  2019]</arxiv:comment>
    <link href="http://arxiv.org/abs/1904.02062v1" rel="alternate" type="text/html"/>
    <link title="pdf" href="http://arxiv.org/pdf/1904.02062v1" rel="related" type="application/pdf"/>
    <arxiv:primary_category xmlns:arxiv="http://arxiv.org/schemas/atom" term="cs.SI" scheme="http://arxiv.org/schemas/atom"/>
    <category term="cs.SI" scheme="http://arxiv.org/schemas/atom"/>
  </entry>
  <entry>
    <id>http://arxiv.org/abs/1904.02058v1</id>
    <updated>2019-04-03T15:26:12Z</updated>
    <published>2019-04-03T15:26:12Z</published>
    <title>Do Hospital Data Breaches Reduce Patient Care Quality?</title>
    <summary>  Objective: To estimate the relationship between a hospital data breach and
hospital quality outcome
  Materials and Methods: Hospital data breaches reported to the U.S. Department
of Health and Human Services breach portal and the Privacy Rights Clearinghouse
database were merged with the Medicare Hospital Compare data to assemble a
panel of non-federal acutecare inpatient hospitals for years 2011 to 2015. The
study panel included 2,619 hospitals. Changes in 30-day AMI mortality rate
following a hospital data breach were estimated using a multivariate regression
model based on a difference-in-differences approach.
  Results: A data breach was associated with a 0.338[95% CI, 0.101-0.576]
percentage point increase in the 30-day AMI mortality rate in the year
following the breach and a 0.446[95% CI, 0.164-0.729] percentage point increase
two years after the breach. For comparison, the median 30-day AMI mortality
rate has been decreasing about 0.4 percentage points annually since 2011 due to
progress in care. The magnitude of the breach impact on hospitals' AMI
mortality rates was comparable to a year's worth historical progress in
reducing AMI mortality rates.
  Conclusion: Hospital data breaches significantly increased the 30-day
mortality rate for AMI. Data breaches may disrupt the processes of care that
rely on health information technology. Financial costs to repair a breach may
also divert resources away from patient care. Thus breached hospitals should
carefully focus investments in security procedures, processes, and health
information technology that jointly lead to better data security and improved
patient outcomes.
</summary>
    <author>
      <name>Sung J. Choi</name>
    </author>
    <author>
      <name>M. Eric Johnson</name>
    </author>
    <arxiv:comment xmlns:arxiv="http://arxiv.org/schemas/atom">32 pages, 6 figures, 4 tables, presented at the Workshop on the
  Economics of Information Security 2017</arxiv:comment>
    <link href="http://arxiv.org/abs/1904.02058v1" rel="alternate" type="text/html"/>
    <link title="pdf" href="http://arxiv.org/pdf/1904.02058v1" rel="related" type="application/pdf"/>
    <arxiv:primary_category xmlns:arxiv="http://arxiv.org/schemas/atom" term="econ.GN" scheme="http://arxiv.org/schemas/atom"/>
    <category term="econ.GN" scheme="http://arxiv.org/schemas/atom"/>
    <category term="q-fin.EC" scheme="http://arxiv.org/schemas/atom"/>
    <category term="stat.AP" scheme="http://arxiv.org/schemas/atom"/>
  </entry>
  <entry>
    <id>http://arxiv.org/abs/1904.02052v1</id>
    <updated>2019-04-03T15:16:36Z</updated>
    <published>2019-04-03T15:16:36Z</published>
    <title>Estimating Chlorophyll a Concentrations of Several Inland Waters with
  Hyperspectral Data and Machine Learning Models</title>
    <summary>  Water is a key component of life, the natural environment and human health.
For monitoring the conditions of a water body, the chlorophyll a concentration
can serve as a proxy for nutrients and oxygen supply. In situ measurements of
water quality parameters are often time-consuming, expensive and limited in
areal validity. Therefore, we apply remote sensing techniques. During field
campaigns, we collected hyperspectral data with a spectrometer and in situ
measured chlorophyll a concentrations of 13 inland water bodies with different
spectral characteristics. One objective of this study is to estimate
chlorophyll a concentrations of these inland waters by applying three machine
learning regression models: Random Forest, Support Vector Machine and an
Artificial Neural Network. Additionally, we simulate four different
hyperspectral resolutions of the spectrometer data to investigate the effects
on the estimation performance. Furthermore, the application of first order
derivatives of the spectra is evaluated in turn to the regression performance.
This study reveals the potential of combining machine learning approaches and
remote sensing data for inland waters. Each machine learning model achieves an
R2-score between 80 % to 90 % for the regression on chlorophyll a
concentrations. The random forest model benefits clearly from the applied
derivatives of the spectra. In further studies, we will focus on the
application of machine learning models on spectral satellite data to enhance
the area-wide estimation of chlorophyll a concentration for inland waters.
</summary>
    <author>
      <name>Philipp M. Maier</name>
    </author>
    <author>
      <name>Sina Keller</name>
    </author>
    <arxiv:comment xmlns:arxiv="http://arxiv.org/schemas/atom">Accepted at ISPRS Geospatial Week 2019 in Enschede</arxiv:comment>
    <link href="http://arxiv.org/abs/1904.02052v1" rel="alternate" type="text/html"/>
    <link title="pdf" href="http://arxiv.org/pdf/1904.02052v1" rel="related" type="application/pdf"/>
    <arxiv:primary_category xmlns:arxiv="http://arxiv.org/schemas/atom" term="cs.CV" scheme="http://arxiv.org/schemas/atom"/>
    <category term="cs.CV" scheme="http://arxiv.org/schemas/atom"/>
    <category term="q-bio.QM" scheme="http://arxiv.org/schemas/atom"/>
    <category term="stat.AP" scheme="http://arxiv.org/schemas/atom"/>
  </entry>
  <entry>
    <id>http://arxiv.org/abs/1904.01863v1</id>
    <updated>2019-04-03T09:10:29Z</updated>
    <published>2019-04-03T09:10:29Z</published>
    <title>Identifying Patient Groups based on Frequent Patterns of Patient Samples</title>
    <summary>  Grouping patients meaningfully can give insights about the different types of
patients, their needs, and the priorities. Finding groups that are meaningful
is however very challenging as background knowledge is often required to
determine what a useful grouping is. In this paper we propose an approach that
is able to find groups of patients based on a small sample of positive examples
given by a domain expert. Because of that, the approach relies on very limited
efforts by the domain experts. The approach groups based on the activities and
diagnostic/billing codes within health pathways of patients. To define such a
grouping based on the sample of patients efficiently, frequent patterns of
activities are discovered and used to measure the similarity between the care
pathways of other patients to the patients in the sample group. This approach
results in an insightful definition of the group. The proposed approach is
evaluated using several datasets obtained from a large university medical
center. The evaluation shows F1-scores of around 0.7 for grouping kidney injury
and around 0.6 for diabetes.
</summary>
    <author>
      <name>Seyed Amin Tabatabaei</name>
    </author>
    <author>
      <name>Xixi Lu</name>
    </author>
    <author>
      <name>Mark Hoogendoorn</name>
    </author>
    <author>
      <name>Hajo A. Reijers</name>
    </author>
    <link href="http://arxiv.org/abs/1904.01863v1" rel="alternate" type="text/html"/>
    <link title="pdf" href="http://arxiv.org/pdf/1904.01863v1" rel="related" type="application/pdf"/>
    <arxiv:primary_category xmlns:arxiv="http://arxiv.org/schemas/atom" term="cs.DB" scheme="http://arxiv.org/schemas/atom"/>
    <category term="cs.DB" scheme="http://arxiv.org/schemas/atom"/>
    <category term="cs.AI" scheme="http://arxiv.org/schemas/atom"/>
  </entry>
  <entry>
    <id>http://arxiv.org/abs/1904.01755v1</id>
    <updated>2019-04-03T03:52:21Z</updated>
    <published>2019-04-03T03:52:21Z</published>
    <title>Cross-Entropy Adversarial View Adaptation for Person Re-identification</title>
    <summary>  Person re-identification (re-ID) is a task of matching pedestrians under
disjoint camera views. To recognise paired snapshots, it has to cope with large
cross-view variations caused by the camera view shift. Supervised deep neural
networks are effective in producing a set of non-linear projections that can
transform cross-view images into a common feature space. However, they
typically impose a symmetric architecture, yielding the network ill-conditioned
on its optimisation. In this paper, we learn view-invariant subspace for person
re-ID, and its corresponding similarity metric using an adversarial view
adaptation approach. The main contribution is to learn coupled asymmetric
mappings regarding view characteristics which are adversarially trained to
address the view discrepancy by optimising the cross-entropy view confusion
objective. To determine the similarity value, the network is empowered with a
similarity discriminator to promote features that are highly discriminant in
distinguishing positive and negative pairs. The other contribution includes an
adaptive weighing on the most difficult samples to address the imbalance of
within/between-identity pairs. Our approach achieves notable improved
performance in comparison to state-of-the-arts on benchmark datasets.
</summary>
    <author>
      <name>Lin Wu</name>
    </author>
    <author>
      <name>Richang Hong</name>
    </author>
    <author>
      <name>Yang Wang</name>
    </author>
    <author>
      <name>Meng Wang</name>
    </author>
    <arxiv:comment xmlns:arxiv="http://arxiv.org/schemas/atom">Appearing at IEEE Transactions on Circuits and Systems for Video
  Technology</arxiv:comment>
    <link href="http://arxiv.org/abs/1904.01755v1" rel="alternate" type="text/html"/>
    <link title="pdf" href="http://arxiv.org/pdf/1904.01755v1" rel="related" type="application/pdf"/>
    <arxiv:primary_category xmlns:arxiv="http://arxiv.org/schemas/atom" term="cs.CV" scheme="http://arxiv.org/schemas/atom"/>
    <category term="cs.CV" scheme="http://arxiv.org/schemas/atom"/>
  </entry>
  <entry>
    <id>http://arxiv.org/abs/1904.01668v1</id>
    <updated>2019-04-02T21:07:49Z</updated>
    <published>2019-04-02T21:07:49Z</published>
    <title>Causal comparative effectiveness analysis of dynamic continuous-time
  treatment initiation rules with sparsely measured outcomes and death</title>
    <summary>  Evidence supporting the current World Health Organization recommendations of
early antiretroviral therapy (ART) initiation for adolescents is inconclusive.
We leverage a large observational data and compare, in terms of mortality and
CD4 cell count, the dynamic treatment initiation rules for HIV-infected
adolescents. Our approaches extend the marginal structural model for estimating
outcome distributions under dynamic treatment regimes (DTR), developed in
Robins et al. (2008), to allow the causal comparisons of both specific regimes
and regimes along a continuum. Furthermore, we propose strategies to address
three challenges posed by the complex data set: continuous-time measurement of
the treatment initiation process; sparse measurement of longitudinal outcomes
of interest, leading to incomplete data; and censoring due to dropout and
death. We derive a weighting strategy for continuous time treatment initiation;
use imputation to deal with missingness caused by sparse measurements and
dropout; and define a composite outcome that incorporates both death and CD4
count as a basis for comparing treatment regimes. Our analysis suggests that
immediate ART initiation leads to lower mortality and higher median values of
the composite outcome, relative to other initiation rules.
</summary>
    <author>
      <name>Liangyuan Hu</name>
    </author>
    <author>
      <name>Joseph W. Hogan</name>
    </author>
    <arxiv:comment xmlns:arxiv="http://arxiv.org/schemas/atom">Accepted by Biometrics</arxiv:comment>
    <link href="http://arxiv.org/abs/1904.01668v1" rel="alternate" type="text/html"/>
    <link title="pdf" href="http://arxiv.org/pdf/1904.01668v1" rel="related" type="application/pdf"/>
    <arxiv:primary_category xmlns:arxiv="http://arxiv.org/schemas/atom" term="stat.AP" scheme="http://arxiv.org/schemas/atom"/>
    <category term="stat.AP" scheme="http://arxiv.org/schemas/atom"/>
    <category term="stat.ME" scheme="http://arxiv.org/schemas/atom"/>
  </entry>
</feed>
`;

export default example;
