import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, BookOpen, ArrowRight } from "lucide-react";

interface Article {
  id: number;
  tag: string;
  title: string;
  intro: string;
  content: React.ReactNode;
}

const articles: Article[] = [
  {
    id: 1,
    tag: "Analyse",
    title: "Management : le problème n'est ni l'humain, ni l'organisation. C'est leur désalignement.",
    intro:
      "Au fil de mes années de direction opérationnelle puis d'accompagnement de managers, j'ai souvent entendu les mêmes analyses lorsqu'une tension apparaît dans une équipe.",
    content: (
      <>
        <p>On incrimine les individus : manque de leadership, communication inadaptée, gestion émotionnelle fragile.</p>
        <p>Ou bien on incrimine l'organisation : trop d'outils, surcharge administrative, pression excessive, manque de coordination.</p>
        <p>Sur le terrain, j'ai constaté que la réalité est plus subtile.</p>
        <p className="text-foreground font-semibold text-lg my-6">Le problème n'est ni l'un ni l'autre.<br />Le problème est le désalignement entre posture et système.</p>

        <h4 className="font-display font-semibold text-foreground text-lg mt-8 mb-3">Quand le système sature, la posture se durcit</h4>
        <p>Dans les environnements exigeants que j'accompagne, je vois régulièrement des managers engagés, compétents, impliqués… mais saturés.</p>
        <p>Priorités fluctuantes. Sollicitations permanentes. Surcharge cognitive.</p>
        <p>Dans ces conditions, la capacité de régulation diminue naturellement.</p>
        <p>Le langage se tend. La disponibilité relationnelle baisse. La bienveillance recule derrière l'urgence.</p>
        <p className="italic">Ce n'est pas une question d'intention. C'est une conséquence du contexte.</p>

        <h4 className="font-display font-semibold text-foreground text-lg mt-8 mb-3">Quand la posture n'est pas travaillée, le système se rigidifie</h4>
        <p>À l'inverse, j'ai également observé des organisations structurées, dotées d'outils performants, mais fragilisées par une posture managériale insuffisamment travaillée.</p>
        <p>Sans maîtrise des déclencheurs émotionnels, sans clarté dans l'expression des attentes, sans capacité à poser un cadre exigeant et respectueux, l'outil devient mécanique et la relation se fragilise.</p>

        <h4 className="font-display font-semibold text-foreground text-lg mt-8 mb-3">Ce que le terrain m'a appris</h4>
        <p>Avec le recul, une conviction s'est imposée dans ma pratique :</p>
        <p className="text-foreground font-semibold">La performance durable repose sur trois piliers indissociables :</p>
        <ol className="list-decimal pl-6 space-y-1 my-3">
          <li>Un cadre clair</li>
          <li>Une priorisation maîtrisée</li>
          <li>Une posture exigeante et bienveillante</li>
        </ol>
        <p>En retirer un déséquilibre l'ensemble.</p>

        <h4 className="font-display font-semibold text-foreground text-lg mt-8 mb-3">Ma position</h4>
        <p>Je ne crois ni aux recettes purement comportementales, ni aux solutions exclusivement organisationnelles.</p>
        <p className="text-foreground font-semibold">Je crois à l'alignement.</p>
        <p>C'est dans cet espace d'équilibre entre exigence, clarté et régulation émotionnelle que les équipes progressent durablement.</p>
      </>
    ),
  },
  {
    id: 2,
    tag: "Dossier terrain — Épisode 1",
    title: "« Nous sommes en apnée »",
    intro:
      "Dans le cadre d'une mission d'accompagnement auprès de 14 managers d'un centre de relation client, j'ai été sollicité à la suite de remontées syndicales concernant un langage parfois jugé inapproprié.",
    content: (
      <>
        <p>Avant la formation, j'ai adressé un questionnaire anonyme au groupe.</p>
        <p>Les indicateurs opérationnels étaient tenus. Le niveau de stress déclaré modéré. Les équipes fonctionnaient.</p>
        <p>Et pourtant, dès le tour de table d'ouverture, une phrase a résumé l'atmosphère :</p>
        <blockquote className="border-l-2 border-primary pl-4 my-6 text-foreground font-medium italic text-lg">« Nous sommes en apnée. »</blockquote>
        <p>Les autres ont acquiescé.</p>

        <h4 className="font-display font-semibold text-foreground text-lg mt-8 mb-3">Ce que révèle cette phrase</h4>
        <p>L'apnée n'est pas l'explosion. Ce n'est pas le conflit ouvert. C'est l'accumulation silencieuse.</p>
        <p>Ces managers pilotaient chacun entre 12 et 18 collaborateurs, dans un environnement soumis à une forte pression opérationnelle.</p>
        <p>L'analyse de leur temps montrait que le management d'équipe arrivait en troisième position, derrière les tâches administratives et la gestion des urgences.</p>
        <p>Ils ne manquaient ni d'engagement ni de compétence. Ils manquaient d'espace.</p>

        <h4 className="font-display font-semibold text-foreground text-lg mt-8 mb-3">Quand la saturation précède la tension</h4>
        <p>Dans un environnement où les priorités fluctuent en permanence, le cerveau passe en mode traitement. On gère. On corrige. On répond.</p>
        <p>La régulation émotionnelle diminue mécaniquement. Le langage devient plus direct. Le ton se durcit. La patience s'effrite.</p>
        <p className="italic">Ce n'est pas un problème d'intention. C'est une conséquence de la saturation attentionnelle.</p>

        <h4 className="font-display font-semibold text-foreground text-lg mt-8 mb-3">Le moment de recul</h4>
        <p>Un exercice simple a consisté à cartographier leur journée réelle et à identifier leurs déclencheurs émotionnels.</p>
        <p>Le silence qui a suivi a été révélateur.</p>
        <blockquote className="border-l-2 border-primary pl-4 my-6 text-foreground font-medium italic">« En fait… on ne manage pas nos équipes. »</blockquote>
        <p>Cette phrase a marqué un tournant. La problématique ne portait plus seulement sur la communication. Elle portait sur la place réelle du management dans leur quotidien.</p>

        <h4 className="font-display font-semibold text-foreground text-lg mt-8 mb-3">Ce que nous avons travaillé</h4>
        <p>Sur trois mois, nous avons abordé deux leviers complémentaires : la régulation émotionnelle en situation tendue et la structuration des priorités.</p>
        <p>L'objectif n'était pas de supprimer la pression. Il était de recréer des espaces de respiration managériale.</p>
        <p>Planifier des temps dédiés. Clarifier les attentes. Introduire des méthodes d'assertivité adaptées à l'urgence.</p>
        <p>Progressivement, la posture a évolué. La pression n'a pas disparu. Mais l'apnée a diminué.</p>

        <h4 className="font-display font-semibold text-foreground text-lg mt-8 mb-3">Ce que cette mission m'a confirmé</h4>
        <p>Dans les environnements exigeants, le risque n'est pas l'incompétence. Le risque est l'épuisement attentionnel.</p>
        <p>Quand le manager n'a plus d'oxygène, la relation se tend.</p>
        <p className="text-foreground font-semibold">Recréer de l'air est parfois le premier acte de leadership.</p>

        <div className="mt-8 p-5 rounded-lg bg-muted/20 border border-border">
          <p className="font-display font-semibold text-foreground mb-3">Pour prendre du recul</p>
          <ul className="space-y-2 list-disc pl-5">
            <li>Êtes-vous en train de manager… ou de simplement gérer l'urgence ?</li>
            <li>Votre agenda reflète-t-il réellement votre rôle managérial ?</li>
            <li>Si vous êtes en apnée, qu'est-ce que votre équipe respire ?</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 3,
    tag: "Dossier terrain — Épisode 2",
    title: "Bienveillance ≠ faiblesse",
    intro:
      "Lors de cette mission d'accompagnement auprès de managers de centre de relation client, un point est rapidement apparu. Dès que nous avons abordé la communication bienveillante, une résistance s'est exprimée.",
    content: (
      <>
        <p>Elle n'était pas agressive. Elle était prudente.</p>
        <blockquote className="border-l-2 border-primary pl-4 my-6 text-foreground font-medium italic">« Dans notre environnement, si on est trop bienveillant, on perd en autorité. »</blockquote>
        <p>Cette phrase mérite qu'on s'y arrête.</p>

        <h4 className="font-display font-semibold text-foreground text-lg mt-8 mb-3">Une confusion fréquente</h4>
        <p>Dans les environnements sous pression, la bienveillance est souvent assimilée à de la permissivité, un manque de fermeté, une posture « trop douce », une perte de contrôle.</p>
        <p>Je rencontre régulièrement cette croyance. Elle est compréhensible.</p>
        <p>Quand les indicateurs sont exigeants, quand les flux sont tendus, quand les équipes sont nombreuses, la priorité devient de tenir. Et dans l'imaginaire collectif, tenir passe parfois par la dureté.</p>

        <h4 className="font-display font-semibold text-foreground text-lg mt-8 mb-3">Ce que j'observe sur le terrain</h4>
        <p>Pourtant, mon expérience montre autre chose.</p>
        <p>Lorsque la pression augmente et que la régulation émotionnelle diminue, le ton se durcit. Mais l'autorité, elle, ne se renforce pas. Elle se fragilise.</p>
        <p className="text-foreground font-semibold my-4">La dureté crée de la conformité.<br />La clarté crée de l'adhésion.</p>

        <h4 className="font-display font-semibold text-foreground text-lg mt-8 mb-3">Le travail en formation</h4>
        <p>Nous avons travaillé sur des situations concrètes : un collaborateur en retard répété, une contestation en open-space, un mail critique envoyé en copie.</p>
        <p>Plutôt que d'improviser une réaction, nous avons introduit des méthodes simples et structurantes.</p>
        <p>La méthode <strong>STOP</strong>, d'abord, pour créer une micro-pause avant de répondre : S'arrêter. Prendre une respiration. Observer. Puis agir.</p>
        <p>Puis la méthode <strong>DESC</strong>, pour structurer l'échange : Décrire les faits, Exprimer l'impact, Spécifier l'attente, Conclure par un cadre clair.</p>
        <p>Ce que les managers ont découvert, c'est que l'urgence n'empêche pas la méthode. Elle exige simplement plus de maîtrise.</p>
        <p>La différence a été immédiate. Même exigence. Moins de tension. Plus de lisibilité.</p>

        <h4 className="font-display font-semibold text-foreground text-lg mt-8 mb-3">Ce que cette mission confirme</h4>
        <p>La bienveillance n'est pas l'absence d'exigence. Elle est la manière d'exprimer l'exigence.</p>
        <p>Elle suppose un cadre clair, une posture stable, une régulation émotionnelle maîtrisée.</p>
        <p>L'autorité durable repose sur la cohérence, la prévisibilité, la clarté et le respect.</p>
        <p className="text-foreground font-semibold my-4">La bienveillance active renforce le cadre. Elle ne l'affaiblit pas.</p>

        <div className="mt-8 p-5 rounded-lg bg-muted/20 border border-border">
          <p className="font-display font-semibold text-foreground mb-3">Pour prendre du recul</p>
          <ul className="space-y-2 list-disc pl-5">
            <li>Associez-vous inconsciemment bienveillance et faiblesse ?</li>
            <li>Votre exigence est-elle perçue comme structurante… ou comme brutale ?</li>
            <li>Disposez-vous de méthodes concrètes pour exprimer un désaccord sans dégrader la relation ?</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 4,
    tag: "Dossier terrain — Épisode 3",
    title: "Réagir dans l'urgence sans abîmer la relation",
    intro:
      "Un collaborateur arrive dès la prise de poste du manager. Il rencontre un problème avec sa fiche de paie. La réponse tombe immédiatement : « Je n'ai pas le temps, reviens plus tard. »",
    content: (
      <>
        <h4 className="font-display font-semibold text-foreground text-lg mt-4 mb-3">Une réaction compréhensible</h4>
        <p>Dans un environnement sous tension, cette réponse paraît logique. Le manager n'a pas encore commencé sa journée. Il vérifie ses chiffres de production. Anticipe les flux. Gère les urgences.</p>
        <p>Le problème n'est pas l'intention. Le problème est la réception.</p>
        <p>Le collaborateur n'entend pas le contexte. Il entend le message. Et le message peut devenir : « Ce n'est pas important », « Ton problème n'est pas prioritaire », « Débrouille-toi ».</p>

        <h4 className="font-display font-semibold text-foreground text-lg mt-8 mb-3">Ce qui se joue réellement</h4>
        <p>L'urgence agit comme un révélateur. Quand la charge mentale est élevée, la réponse devient plus directe, plus courte, plus sèche.</p>
        <p className="italic">Ce n'est pas une question de compétence. C'est une question de régulation émotionnelle et de cadre.</p>
        <p>Réagir dans l'urgence est un test de posture.</p>

        <h4 className="font-display font-semibold text-foreground text-lg mt-8 mb-3">Le travail réalisé</h4>
        <p>En formation, nous avons rejoué cette scène. Même contexte. Même pression. Mais avec deux leviers travaillés : une micro-régulation (STOP) avant de répondre, et une réponse structurée et cadrée.</p>
        <blockquote className="border-l-2 border-primary pl-4 my-6 text-foreground font-medium italic">
          « Je comprends que c'est important pour toi. Laisse-moi 15 minutes pour me connecter et je te propose qu'on en parle à 9h15. »
        </blockquote>
        <p>La situation n'a pas changé. Le temps disponible non plus. Mais la relation est préservée. Le cadre est posé. La priorité est clarifiée. L'engagement reste intact.</p>

        <h4 className="font-display font-semibold text-foreground text-lg mt-8 mb-3">Ce que les managers ont compris</h4>
        <p>Ce n'est pas le manque de temps qui crée la tension. C'est la manière dont on répond quand on en manque.</p>
        <p className="text-foreground font-semibold">L'urgence n'excuse pas la brusquerie. Elle exige plus de maîtrise.</p>

        <h4 className="font-display font-semibold text-foreground text-lg mt-8 mb-3">Ce que cela révèle</h4>
        <p>Dans les environnements exigeants, la performance ne dépend pas seulement des indicateurs. Elle dépend de la qualité des micro-interactions quotidiennes.</p>
        <p>Une phrase mal calibrée peut créer de la distance. Une réponse structurée peut renforcer la confiance.</p>
        <p className="text-foreground font-semibold">La posture ne se joue pas dans les grandes décisions. Elle se joue dans les premières minutes de la journée.</p>

        <div className="mt-8 p-5 rounded-lg bg-muted/20 border border-border">
          <p className="font-display font-semibold text-foreground mb-3">Pour prendre du recul</p>
          <ul className="space-y-2 list-disc pl-5">
            <li>Comment réagissez-vous dans les premières minutes de votre journée ?</li>
            <li>Votre réponse protège-t-elle votre cadre… ou fragilise-t-elle la relation ?</li>
            <li>Disposez-vous d'une méthode pour gérer l'urgence sans la transmettre aux autres ?</li>
          </ul>
        </div>
      </>
    ),
  },
];

/* ── Épisode 4 as a standalone closing card ── */
const episode4Content = {
  tag: "Dossier terrain — Épisode 4",
  title: "Quand la transformation accélère plus vite que le management",
  intro:
    "Au départ, la mission portait essentiellement sur le langage managérial. Mais très vite, en creusant les échanges, une autre réalité est apparue.",
  content: (
    <>
      <p>Un nouveau dirigeant venait d'arriver. Il portait une vision claire. Il lançait des projets structurants. Il introduisait des outils positifs. Les intentions étaient bonnes. Mais la perception, à court terme, était différente.</p>

      <blockquote className="border-l-2 border-primary pl-4 my-6 text-foreground font-medium italic">« On subit plus qu'on n'anticipe. »</blockquote>
      <p>Plusieurs managers ont exprimé le même ressenti. Les projets s'enchaînaient. Les outils se multipliaient. Les priorités semblaient évoluer rapidement.</p>
      <p>Individuellement, chaque décision avait du sens. Collectivement, le rythme créait une sensation d'empilement.</p>

      <h4 className="font-display font-semibold text-foreground text-lg mt-8 mb-3">Le phénomène d'accumulation</h4>
      <p>Dans les périodes de transformation, un mécanisme subtil apparaît : chaque initiative vise l'amélioration. Mais si rien n'est retiré, simplifié ou stabilisé, la charge cognitive augmente.</p>
      <p>Les managers se retrouvent alors à alimenter davantage d'outils, suivre plus d'indicateurs, intégrer de nouvelles méthodes, répondre à des attentes élargies — sans toujours disposer du temps d'appropriation nécessaire.</p>

      <h4 className="font-display font-semibold text-foreground text-lg mt-8 mb-3">Ce qui se joue réellement</h4>
      <p>La tension observée n'était pas liée à un refus du changement. Elle était liée à la vitesse du changement.</p>
      <p>Lorsque la transformation va plus vite que l'appropriation, le sentiment de maîtrise diminue. Et quand la maîtrise diminue, la régulation émotionnelle s'affaiblit.</p>
      <p className="italic">Le système ne crée pas volontairement la tension. Mais il peut l'amplifier.</p>

      <h4 className="font-display font-semibold text-foreground text-lg mt-8 mb-3">Ce que cette mission m'a confirmé</h4>
      <p>Former les managers à la posture est indispensable. Mais cela ne suffit pas.</p>
      <p>Dans un contexte de transformation, il est essentiel de : clarifier les priorités stratégiques, stabiliser certains rituels, expliciter ce qui change… et ce qui ne change pas, et laisser un temps d'appropriation.</p>
      <p className="text-foreground font-semibold">Le management durable repose autant sur la qualité du cadre que sur la qualité de la posture.</p>

      <div className="mt-8 p-5 rounded-lg bg-muted/20 border border-border">
        <p className="font-display font-semibold text-foreground mb-3">Pour prendre du recul</p>
        <ul className="space-y-2 list-disc pl-5">
          <li>Vos transformations sont-elles accompagnées d'un temps d'appropriation ?</li>
          <li>Chaque nouvel outil remplace-t-il quelque chose… ou s'ajoute-t-il ?</li>
          <li>Vos managers ont-ils le sentiment d'anticiper… ou de subir ?</li>
        </ul>
      </div>

      <div className="mt-8 p-5 rounded-lg border border-primary/30 bg-primary/5">
        <p className="font-display font-semibold text-foreground mb-2">Une étape suivante indispensable</p>
        <p>Travailler la posture managériale est nécessaire. Mais sans maîtrise des priorités, la tension revient.</p>
        <p className="mt-2">La suite portera sur un enjeu clé : <strong>la gestion des priorités comme levier de stabilité managériale.</strong></p>
      </div>
    </>
  ),
};

const ArticleCard = ({ article }: { article: Article }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="border border-border rounded-xl bg-card overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-6 md:px-8 md:py-7 flex items-start gap-4 group cursor-pointer"
      >
        <div className="flex-1 min-w-0">
          <span className="inline-block text-xs font-semibold tracking-wide uppercase text-primary mb-2">
            {article.tag}
          </span>
          <h3 className="font-display text-lg md:text-xl font-semibold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors">
            {article.title}
          </h3>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed line-clamp-2">
            {article.intro}
          </p>
        </div>
        <div className="pt-1 shrink-0">
          <ChevronDown
            size={20}
            className={`text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-8 md:px-8 md:pb-10 border-t border-border pt-6 prose-custom">
              <p className="text-muted-foreground leading-relaxed mb-4">{article.intro}</p>
              <div className="text-muted-foreground leading-relaxed space-y-4 [&_h4]:text-foreground [&_p]:text-muted-foreground [&_blockquote]:text-foreground [&_li]:text-muted-foreground [&_strong]:text-foreground">
                {article.content}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
};

const BlogSection = () => {
  const [ep4Open, setEp4Open] = useState(false);

  return (
    <section id="blog" className="section-padding bg-sand">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <h2 className="section-title text-foreground">Ressources</h2>
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <p className="section-subtitle">
            Cette rubrique rassemble des analyses issues de situations réelles d'accompagnement.
            J'y partage des réflexions sur la posture managériale, la performance collective et les dynamiques organisationnelles, à partir d'expériences de terrain.
          </p>
        </motion.div>

        {/* Intro article */}
        <div className="mt-12 space-y-4">
          <ArticleCard article={articles[0]} />
        </div>

        {/* Dossier terrain series */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-14 mb-6 flex items-center gap-3"
        >
          <BookOpen size={18} className="text-primary" />
          <h3 className="font-display text-xl font-semibold text-foreground">Managers sous pression</h3>
          <span className="text-xs text-muted-foreground bg-muted/20 px-2 py-0.5 rounded">Dossier terrain</span>
        </motion.div>

        <div className="space-y-4">
          {articles.slice(1).map((a) => (
            <ArticleCard key={a.id} article={a} />
          ))}

          {/* Episode 4 */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="border border-border rounded-xl bg-card overflow-hidden"
          >
            <button
              onClick={() => setEp4Open(!ep4Open)}
              className="w-full text-left px-6 py-6 md:px-8 md:py-7 flex items-start gap-4 group cursor-pointer"
            >
              <div className="flex-1 min-w-0">
                <span className="inline-block text-xs font-semibold tracking-wide uppercase text-primary mb-2">
                  {episode4Content.tag}
                </span>
                <h3 className="font-display text-lg md:text-xl font-semibold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors">
                  {episode4Content.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed line-clamp-2">
                  {episode4Content.intro}
                </p>
              </div>
              <div className="pt-1 shrink-0">
                <ChevronDown
                  size={20}
                  className={`text-muted-foreground transition-transform duration-300 ${ep4Open ? "rotate-180" : ""}`}
                />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {ep4Open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-8 md:px-8 md:pb-10 border-t border-border pt-6">
                    <p className="text-muted-foreground leading-relaxed mb-4">{episode4Content.intro}</p>
                    <div className="text-muted-foreground leading-relaxed space-y-4 [&_h4]:text-foreground [&_p]:text-muted-foreground [&_blockquote]:text-foreground [&_li]:text-muted-foreground [&_strong]:text-foreground">
                      {episode4Content.content}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
